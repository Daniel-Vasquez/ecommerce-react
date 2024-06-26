import { ProductInCart } from '@/components/ProductInCart'
import { formatCurrency } from '@/utils'
import { LogoDelete } from '@/components/Icons/LogoDelete'

export const CartItem = ({ name, image, status, quantity, addToCart, removeToCart, removeFromCart }) => {

  return (
    <li className="flex items-center flex-wrap gap-5 border-b-2 border-golden pb-4 my-4">
      <img
        src={image}
        alt={name}
        className="h-96 m-auto aspect-square rounded-md lg:m-0"
      />
      <div className="flex m-auto gap-6 flex-wrap items-center justify-center">
        <h1 className="text-golden text-xl text-center">
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
          <button onClick={removeFromCart}>
            <LogoDelete className="w-10 text-red-400 rounded-full transition-all hover:text-red-600" />
          </button>
        </section>
      </div>
    </li>
  )
}
