import { useCart } from '@/hooks/useCart.js'
import { Product } from '@/components/Product.jsx'
import { LoadingScreen } from '@/components/LoadingScreen.jsx'

export function Products({ products, isLoading }) {
  const { addToCart, removeToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="container max-w-7xl m-auto my-7 min-h-96">
      {isLoading
        ? (<LoadingScreen />)
        : (
          <ul className="m-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
            <Product
              products={products}
              addToCart={addToCart}
              removeToCart={removeToCart}
              removeFromCart={removeFromCart}
              checkProductInCart={checkProductInCart}
            />
          </ul>
        )
      }
    </main>
  )
}