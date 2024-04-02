import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Products } from '@/components/Products.jsx'
import { useQuery } from '@/hooks/useQuery.js'
import { useScrollToTop } from '@/utils'
import { loading, error } from '@/redux/authSlice'

export function CartPage() {
  const dispatch = useDispatch();
  const params = useQuery();
  const loadingLogin = useSelector(state => state.loading)
  const currentPage = parseInt(params.get("page")) || 1;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    dispatch(loading(true));
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(loading(false));
        dispatch(error(true));
      })
  };
  
  useScrollToTop();

  return (
    <div className="my-5">
      <Products
        products={characters}
        isLoading={loadingLogin}
      />
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
    </div>
  )
}
