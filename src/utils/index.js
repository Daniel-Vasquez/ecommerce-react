export function calculateCartTotals(cart) {
  const totalItemsCart = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  
  return { totalItemsCart, totalPrice };
}

export const formatCurrency = (number) => {
  return number?.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  });
};