import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes.ts";

export const Navbar = () => {
  return (
    <div className="bg-blue max-w-7xl flex items-center justify-between mx-auto overflow-visible py-5 px-4 rounded-2xl rounded-t-none">
      <p>Rick and Morty</p>
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