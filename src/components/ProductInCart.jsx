export const ProductInCart = ({ quantity, product, addToCart, removeToCart }) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <small className="text-lg">
        Qty: {quantity}
      </small>
      <div>
        <button
          disabled={quantity <= 1}
          onClick={() => removeToCart(product)}
        >
          -
        </button>
        <button
          disabled={quantity >= product?.stock}
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  )
}
