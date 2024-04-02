import { ProductInCart } from '@/components/ProductInCart'
import { formatCurrency } from '@/utils'

export const CartItem = ({ name, image, status, quantity, addToCart, removeToCart, removeFromCart }) => {

  return (
    <li className="flex items-center flex-wrap gap-5 border-b-2 border-golden pb-4 my-4">
      <img
        src={image}
        alt={name}
        className="m-auto h-56 aspect-square"
      />
      <div className="flex flex-col justify-center items-center m-auto">
        <h1 className="text-golden text-center">
          <strong>{name}</strong>
        </h1>

        <p className="text-black font-semibold">
          {formatCurrency(name.length * status.length)}
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
          <button className="text-red-600 font-bold hover:underline" onClick={removeFromCart}>
            Eliminar producto
          </button>
        </section>
      </div>
    </li>
  )
}
