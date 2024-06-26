import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '@/reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeToCart = product => dispatch({
    type: 'REMOVE_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}