
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button } from '@/components/Button.jsx'
import { useCart } from '@/hooks/useCart.js'
import { Cart } from '@/components/Cart.jsx';
import { ProductInCart } from '@/components/ProductInCart.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from '@/components/Icons.jsx'
import { formatCurrency, useScrollToTop } from '@/utils'

export const ProductDetails = () => {
  const { addToCart, removeToCart, removeFromCart, cart } = useCart()
  const { idProduct } = useParams()
  const [product, setProduct] = useState({})

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  const isProductInCart = checkProductInCart(product)

  useEffect(() => {
    const getProducts = async () => {

      fetch(`https://rickandmortyapi.com/api/character/${idProduct}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
        });
    };

    getProducts();
  }, []);

  const { quantity } = cart.find((product) => product.id === parseInt(idProduct)) || { quantity: 0 }

  const { name, image, species, status } = product

  useScrollToTop()

  return (
    <>
      <Cart />
      <div className="container max-w-7xl m-auto px-4 my-4 h-screen">
        <div className="flex justify-center h-72 aspect-square m-auto">
          <img className="h-full rounded-lg" src={image} alt={name} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-golden text-3xl font-bold text-center mt-4 mb-2 ">
            {name}
          </h1>
          <p className="text-2xl rounded-md text-white font-bold">
            {formatCurrency(name?.length * status?.length)}
          </p>
          <p className="max-w-2xl text-white m-auto text-justify">
            {species}
          </p>
          <div className="text-white">
            {status}
          </div>
        </div>
        <div className="text-center my-5">
          {isProductInCart && (
            <ProductInCart
              quantity={quantity}
              removeToCart={() => removeToCart(product)}
              addToCart={() => addToCart({ ...product, price: name.length * status.length })}
            />
          )}
          <button
            style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
            onClick={() => {
              isProductInCart
                ? removeFromCart(product)
                : addToCart(product)
            }}
          >
            {isProductInCart
              ? <RemoveFromCartIcon />
              : <AddToCartIcon />
            }
          </button>
        </div>
        <div className="flex justify-center">
          <Button
            route='/productos'
            text='Productos'
          />
        </div>
      </div>
    </>
  )
}
