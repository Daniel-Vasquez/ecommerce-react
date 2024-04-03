import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '@/hooks/useCart.js'
import { ProductInCart } from '@/components/ProductInCart.jsx'
import { LoadingScreen } from '@/components/LoadingScreen';
import { loading, error, getCharacters } from '@/redux/authSlice'
import { formatCurrency, useScrollToTop } from '@/utils'
import { LogoDelete } from "@/components/Icons/LogoDelete";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.allCharacters)
  const { idProduct } = useParams()
  const { addToCart, removeToCart, removeFromCart, cart } = useCart()
  const loadingCharacter = useSelector(state => state.loading)

  const product = characters.find((product) => product.id === parseInt(idProduct))

  useEffect(() => {
    if (!product) {
      dispatch(loading(false));
      fetch(`https://rickandmortyapi.com/api/character/${idProduct}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(getCharacters([data]));
          dispatch(loading(false));
        })
        .catch(() => {
          dispatch(error(true));
        })
    }
  }, [product, idProduct, addToCart])

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  if (!product || loadingCharacter) {
    return <LoadingScreen />
  }

  const isProductInCart = checkProductInCart(product)

  const { quantity } = cart.find((product) => product.id === parseInt(idProduct)) || { quantity: 0 }

  const { name, image, species, status } = product

  useScrollToTop()

  return (
    <div className="container max-w-7xl m-auto my-4 h-screen">
      <div className="flex flex-col gap-7 md:flex-row">
        <div className="flex justify-center m-auto w-72 h-96 aspect-square md:w-auto">
          <img className="w-full h-full rounded-lg" src={image} alt={name} />
        </div>
        <div className="grid grid-rows-2 w-full">
          <div className="flex w-full flex-col md:flex-row gap-4 justify-between items-center px-3  border-orange-500">
            <h1 className="text-golden text-3xl font-bold text-center">
              {name}
            </h1>
            <p className="text-2xl rounded-md text-black font-bold">
              {0 || formatCurrency(name?.length * status?.length)}
            </p>
            <p className="max-w-2xl text-black text-justify">
              {species}
            </p>
            <div className="text-black">
              {status}
            </div>
          </div>

          <div className="flex gap-3 justify-center items-center border-blue-700">
            {isProductInCart && (
              <ProductInCart
                quantity={quantity}
                removeToCart={() => removeToCart(product)}
                addToCart={() => addToCart({ ...product, price: name.length * status.length })}
              />
            )}
            <button
              className="font-bold hover:underline"
              style={{ color: isProductInCart ? 'red' : '#fbbf24' }}
              onClick={() => {
                isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
              }}
            >
              {isProductInCart
                ? <LogoDelete className="w-9 text-red-400 rounded-full transition-all hover:text-red-600" />
                : "Añadir al carrito"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
