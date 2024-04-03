import { Link } from 'react-router-dom'
import { useCart } from '@/hooks/useCart.js'
import { formatCurrency } from '@/utils/index.js'
import { ProductInCart } from '@/components/ProductInCart.jsx'

export const Product = ({ products, checkProductInCart, removeFromCart, addToCart, removeToCart }) => {
  const { cart } = useCart()

  return (
    products.map(product => {
      const { id, image, name, status } = product
      const isProductInCart = checkProductInCart(product)
      const { quantity } = cart.find((product) => product.id === id) || 0

      return (
        <li key={id} className=" bg-gray-100 rounded-md">
          <Link className="flex flex-col gap-2" to={`/productos/${id}`}>
            <img
              className="aspect-square h-96 rounded-md"
              src={image}
              alt={name}
            />
          </Link>

          <div className="p-3">
            <Link className="flex flex-col gap-2" to={`/productos/${id}`}>
              <h1 className="text-golden font-bold hover:text-blue-500">
                {name}
              </h1>
            </Link>

            <p className="">
              {formatCurrency(name?.length * status?.length) || 0}
            </p>

            <div className="flex justify-center items-center gap-3">
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
                className="font-bold hover:underline"
                style={{ color: isProductInCart ? 'red' : '#fbbf24' }}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
              >
                {
                  isProductInCart
                    ? "Eliminar"
                    : "Añadir al carrito"
                }
              </button>
            </div>
          </div>
        </li>
      )
    })
  )
}
