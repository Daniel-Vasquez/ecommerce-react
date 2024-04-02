import { useCart } from '@/hooks/useCart.js'
import { CartItem } from '@/components/CartItem.jsx';
import { calculateCartTotals } from '@/utils/index.js';
import { Button } from '@/components/Button.jsx';
import { RemoveFromCartIcon } from '@/components/Icons'
import { formatCurrency } from '@/utils/index.js'

export const Checkout = () => {
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-white text-3xl font-semibold text-center">No hay productos añadidos</h1>
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
    <div className="container m-auto my-3 px-3">
      <h1 className="text-2xl text-white font-extrabold text-center">Productos añadidos</h1>
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
      <div className="text-white text-center">
        <p>Total de productos añadidos: { totalItemsCart }</p>
        <p>Total: {formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex justify-center items-center gap-3 my-3">
        <button
          style={{ backgroundColor: 'red' }}
          onClick={clearCart}
          title='Vaciar carrito'
        >
          <RemoveFromCartIcon />
        </button>
        <Button
          route='/productos'
          text='Productos'
        />
      </div>
    </div>
  )
}
