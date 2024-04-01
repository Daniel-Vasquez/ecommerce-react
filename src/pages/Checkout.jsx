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
      <>
        <h1>No products added</h1>
        <Button
          route='/'
          text='Go back'
        />
      </>
    )
  }

  return (
    <div className="container m-auto my-3">
      <h1 className="text-2xl font-extrabold text-center">Productos añadidos</h1>
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
      <div>
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
