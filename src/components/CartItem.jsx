import { RemoveFromCartIcon } from '@/components/Icons'
import { ProductInCart } from './ProductInCart'

export const CartItem = ({ name, image, status, quantity, addToCart, removeToCart, removeFromCart }) => {

  return (
    <li className="flex items-center flex-wrap gap-5 border-b-2 border-golden pb-4 my-4">
      <img
        src={image}
        alt={name}
        className="m-auto h-56 aspect-square"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 justify-items-center items-center gap-4 w-full">
        <h1 className="text-white text-center">
          <strong>{name}</strong>
        </h1>

        <p className="text-white">
          ${name.length * status.length}
        </p>

        <ProductInCart
          quantity={quantity}
          product={{
            name,
            price: name.length * status.length,
            stock: status.length
          }}
          addToCart={addToCart}
          removeToCart={removeToCart}
        />

        <section>
          <button style={{ backgroundColor: 'red' }} onClick={removeFromCart}>
            <RemoveFromCartIcon />
          </button>
        </section>
      </div>
    </li>
  )
}
