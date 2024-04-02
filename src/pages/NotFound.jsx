import { Link } from 'react-router-dom';
import { RickLogo } from '@/components/Icons/RickLogo';

export const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <RickLogo className="w-28" />
        <div className="flex gap-1">
          <h1 className="text-9xl font-black text-golden">
            4
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-golden w-24">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM64 256c0-106.1 86-192 192-192 42.1 0 81 13.7 112.6 36.7L100.7 368.6C77.7 337 64 298.1 64 256zm192 192c-42.1 0-81-13.7-112.6-36.7l267.9-267.9c23 31.7 36.7 70.5 36.7 112.6 0 106.1-86 192-192 192z">
            </path>
          </svg>
          <h1 className="text-9xl font-black text-golden">
            4
          </h1>
        </div>
        <p className="text-center text-black text-xl">Página no encontrada</p>
        <p className="text-center text-black">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className="text-blue-500 my-4 hover:underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
