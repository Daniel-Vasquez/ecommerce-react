import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart.js'
import { CartItem } from '@/components/CartItem.jsx';
import { calculateCartTotals } from '@/utils/index.js';
import { Button } from '@/components/Button.jsx';
import { formatCurrency } from '@/utils/index.js'

export const CartPage = () => {
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-golden text-3xl font-semibold text-center">No hay productos añadidos</h1>
        <div className="flex justify-center my-11">
          <Button
            route='/productos'
            text='Productos'
          />
        </div>
      </div>
    )
  }

  return (
    <div className="container flex flex-col max-w-7xl m-auto my-4 px-3">
      <div className="flex-1 min-h-screen">
        <h1 className="text-2xl text-golden font-extrabold text-center my-4">Productos añadidos: {totalItemsCart}</h1>
        <div className="">
          <ul className="flex flex-col gap-5">
            {cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                removeToCart={() => removeToCart(product)}
                removeFromCart={() => removeFromCart(product)}
                {...product}
              />
            ))}
          </ul>
        </div>
        <div className="text-black text-center">
          <p className="text-xl font-bold">Total a pagar: {""}
            <span className="font-bold text-golden">
              {formatCurrency(totalPrice)}
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 my-3">
          <button
            className="text-xl text-red-600 font-bold hover:underline"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="text-xl text-green-600 font-bold hover:underline"
          >
            Pagar
          </Link>
        </div>
      </div>
    </div>
  )
}
