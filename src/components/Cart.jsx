import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem.jsx';
import { calculateCartTotals } from '../utils/index.js';
import { Button } from './Button.jsx';
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon totalProductsAdded={cart} />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className="cart py-3">
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
              <p>Total: ${totalPrice.toLocaleString()}</p>
            </section>

            <div className="flex justify-center text-red-500 my-2">
              <button onClick={clearCart} title="Remover todos los productos">
                <ClearCartIcon />
              </button>
            </div>
            <div className="flex justify-center my-9">
              <Button
                route='/checkout'
                text='Pagar'
              />
            </div>
          </>
        )}
      </aside>
    </>
  )
}