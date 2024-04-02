import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes.ts";
import { RickAndMorty } from "@/components/Icons/RickAndMorty.jsx";
import { logout } from '@/redux/authSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const tokenAcess = useSelector(state => state.token)
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className="container m-auto bg-white max-w-7xl flex items-center justify-between mx-auto overflow-visible py-3 px-4 rounded-2xl rounded-t-none">
      <Link
        to="https://rickandmortyapi.com/documentation"
        target="_blank"
        title="Rick and Morty API"
      >
        <RickAndMorty className="w-16" />
      </Link>
      {tokenAcess && (
        <>
          <nav className="flex items-center gap-5">
            {ROUTES.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className="text-black transition-colors duration-300 border-golden border-l-4 pl-2 hover:text-golden"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <button onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
};