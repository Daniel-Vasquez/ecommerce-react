import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Products } from '@/components/Products.jsx'
import { Cart } from '@/components/Cart.jsx'
import { useQuery } from '@/hooks/useQuery.js'

export function CartPage() {
  const params = useQuery();
  const currentPage = parseInt(params.get("page")) || 1;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    setLoading(true);
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };

  return (
    <>
      <Cart />
      <div>
        <h1 className="text-4xl font-black text-golden text-center my-7">Tarjetas de Rick and Morty</h1>
        <div className="max-w-56 grid grid-cols-3 justify-items-center m-auto">
          <div>
            {currentPage > 1 &&
              <Link
                className="text-golden font-bold"
                to={`/productos?page=${currentPage - 1}`}
              >
                Anterior
              </Link>
            }
          </div>
          <span className="mx-3 text-golden font-bold">{currentPage}</span>
          <Link
            className="text-golden font-bold"
            to={`/productos?page=${currentPage + 1}`}
          >
            Siguiente
          </Link>

        </div>
        <Products
          products={characters}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}
