export const ProductInCart = ({ quantity, product, addToCart, removeToCart }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-3">
      <small className="text-lg text-white">
        Qty: {quantity}
      </small>
      <div>
        <button
          className="bg-red-500"
          disabled={quantity <= 1}
          onClick={() => removeToCart(product)}
        >
          -
        </button>
        <button
          className="bg-green-500"
          disabled={quantity >= product?.stock}
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  )
}
