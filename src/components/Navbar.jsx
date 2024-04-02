import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes.ts";
import { RickAndMorty } from "@/components/Icons/RickAndMorty.jsx";

export const Navbar = () => {
  return (
    <div className="container m-auto bg-blue-light max-w-7xl flex items-center justify-between mx-auto overflow-visible py-3 px-4 rounded-2xl rounded-t-none">
      <Link
        to="https://rickandmortyapi.com/documentation"
        target="_blank"
        title="Rick and Morty API"
      >
        <RickAndMorty className="w-16" />
      </Link>
      <nav className="flex gap-3">
      {ROUTES.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className="text-white transition-colors duration-300 border-golden border-l-4 pl-2 hover:text-golden"
        >
          {route.label}
        </Link>
      ))}
    </nav>
    </div>
  );
};