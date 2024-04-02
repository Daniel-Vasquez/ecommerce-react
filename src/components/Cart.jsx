import { useId } from 'react'
import { Link } from 'react-router-dom';
import { CartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem.jsx';
import { calculateCartTotals } from '../utils/index.js';
import { formatCurrency } from '@/utils/index.js'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

  return (
    <div>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon className="w-7 text-balck" totalProductsAdded={cart} />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className="cart bg-slate-400 p-3">
        <label className="bg-red-500 text-white px-2 py-1 rounded-sm cursor-pointer" htmlFor={cartCheckboxId}>
          Cerrar
        </label>
        <h1 className="text-2xl text-white font-extrabold text-center">Carrito</h1>
        <ul>
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

        {totalPrice > 0 && (
          <>
            <section className="text-white text-center">
              <p>Total de productos agregados: { totalItemsCart }</p>
              <p>Total: {" "}
                <span className="font-bold text-golden">{formatCurrency(totalPrice)}</span>
              </p>
            </section>

            <div className="flex justify-center font-extrabold text-red-500 my-2 hover:underline">
              <button onClick={clearCart}>
                Limpiar carrito
              </button>
            </div>
            <div className="flex justify-center my-9">
              <Link
                className="bg-green-500 text-white px-3 py-1 rounded-sm hover:bg-green-600"
                to="/carrito"
                onClick={() => cartCheckboxId()}
              >
                Pagar
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}