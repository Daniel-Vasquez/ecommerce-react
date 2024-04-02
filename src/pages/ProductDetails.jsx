
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
        <div className="flex justify-center mb-4">
          <Button
            route='/productos'
            text='Productos'
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center h-96 aspect-square">
            <img className="h-full rounded-lg" src={image} alt={name} />
          </div>
          <div className="grid grid-rows-2 w-full">
            <div className="flex w-full flex-col md:flex-row gap-4 justify-between items-center px-3  border-orange-500">
              <h1 className="text-golden text-3xl font-bold text-center">
                {name}
              </h1>
              <p className="text-2xl rounded-md text-black font-bold">
                {formatCurrency(name?.length * status?.length)}
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
                className="font-bold"
                style={{ color: isProductInCart ? 'red' : '#fbbf24' }}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
              >
                {isProductInCart
                  ? "Eliminar"
                  : "Añadir al carrito"
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
