import { Link } from 'react-router-dom'
import { useCart } from '@/hooks/useCart.js'
import { formatCurrency } from '@/utils/index.js'
import { AddToCartIcon, RemoveFromCartIcon } from '@/components/Icons.jsx'
import { ProductInCart } from '@/components/ProductInCart.jsx'

export const Product = ({ products, checkProductInCart, removeFromCart, addToCart, removeToCart }) => {
  const { cart } = useCart()

  return (
    products.map(product => {
      const { id, image, title, price } = product
      const isProductInCart = checkProductInCart(product)
      const { quantity } = cart.find((product) => product.id === id) || 0

      return (
        <li key={id} className="bg-blue-light flex flex-col justify-between gap-4 items-center p-3 rounded-md relative">
          <Link className="flex flex-col gap-2" to={`/product/${id}`}>
            <img
              className="aspect-square h-64"
              src={image}
              alt={title}
            />

            <h1 className="text-golden font-bold hover:text-blue-500">
              {title}
            </h1>
          </Link>

          <p className="absolute flex items-center justify-center top-4 left-2  bg-green-500 p-2 rounded-md text-white font-bold">
            {formatCurrency(price)}
          </p>

          <div className="flex flex-col items-center">
            {
              isProductInCart && (
                <ProductInCart
                  quantity={quantity}
                  removeToCart={() => removeToCart(product)}
                  addToCart={() => addToCart(product)}
                />
              )
            }
            <button
              style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
              }}
            >
              {
                isProductInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
              }
            </button>
          </div>
        </li>
      )
    })
  )
}
