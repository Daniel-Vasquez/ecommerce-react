
import { useState, useEffect } from 'react'
import { Products } from '../components/Products.jsx'
import { Cart } from '@/components/Cart.jsx'

export function CartPage() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getProducts();
  }, []);

  return (
    <>
      <Cart />
      <Products
        products={data}
        isLoading={isLoading}
      />
    </>
  )
}
