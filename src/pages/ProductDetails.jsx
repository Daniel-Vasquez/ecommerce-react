
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button } from '@/components/Button.jsx'
import { useCart } from '@/hooks/useCart.js'
import { Cart } from '@/components/Cart.jsx';
import { ProductInCart } from '@/components/ProductInCart.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from '@/components/Icons.jsx'
import { formatCurrency } from '@/utils'

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

      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((data) => {
          const findProduct = data.find(product => product.id === parseInt(idProduct))
          setProduct(findProduct)
        });
    };

    getProducts();
  }, []);

  const { quantity } = cart.find((product) => product.id === parseInt(idProduct)) || { quantity: 0 }

  const { title, description, price, image, rating } = product

  return (
    <>
      <Cart />
      <div className="container max-w-7xl m-auto px-4 my-4 h-screen">
        <div className="flex justify-center h-72 aspect-square m-auto">
          <img className="h-full rounded-lg" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-golden text-3xl font-bold text-center mt-4 mb-2 ">
            {title}
          </h1>
          <p className="text-2xl rounded-md text-white font-bold">
            {formatCurrency(price)}
          </p>
          <p className="max-w-2xl text-white m-auto text-justify">
            {description}
          </p>
          <div className="text-white">
            {rating?.rate}
          </div>
        </div>
        <div className="text-center my-5">
          {isProductInCart && (
            <ProductInCart
              quantity={quantity}
              removeToCart={() => removeToCart(product)}
              addToCart={() => addToCart(product)}
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
