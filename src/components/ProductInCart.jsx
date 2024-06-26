export const ProductInCart = ({ quantity, product, addToCart, removeToCart }) => {
  return (
    <section>
      <div className="relative flex gap-3 items-center">
        <p className="text-xl font-semibold" >Qty:</p>
        <button
          className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          type="button"
          id="decrement-button"
          disabled={quantity <= 1}
          onClick={() => removeToCart(product)}
        >
          <svg className="w-2.5 h-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>
        <small className="flex-shrink-0 text-golden border-0 text-2xl font-bold">
          {quantity}
        </small>
        <button
          className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          type="button" id="increment-button"
          onClick={() => addToCart(product)}
        >
          <svg className="w-2.5 h-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
    </section>
  )
}
