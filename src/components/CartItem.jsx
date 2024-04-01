import { RemoveFromCartIcon } from '@/components/Icons'

export const CartItem = ({ image, price, title, quantity, stock, addToCart, removeToCart, removeFromCart }) => {
  return (
    <li className="flex items-center flex-wrap gap-5 border-b-2 border-golden pb-4 my-4">
      <img
        src={image}
        alt={title}
        className="m-auto h-56 aspect-square"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 justify-center items-center gap-4 w-full">
        <h1>
          <strong>{title}</strong>
        </h1>

        <p>
          ${price.toLocaleString()}
        </p>

        <section className="flex justify-center items-center gap-3">
          <small>
            Qty: {quantity}
          </small>
          <button disabled={quantity <= 1} onClick={removeToCart}>-</button>
          <button disabled={quantity >= stock} onClick={addToCart}>+</button>
        </section>

        <section>
          <button style={{ backgroundColor: 'red' }} onClick={removeFromCart}>
            <RemoveFromCartIcon />
          </button>
        </section>
      </div>
    </li>
  )
}
