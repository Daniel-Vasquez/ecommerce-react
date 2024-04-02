import { Link } from 'react-router-dom'
import { Cart } from '@/components/Cart'
import { RickLogo } from '@/components/Icons/RickLogo'
import bannerRickAndMorty from '@/assets/rickAndMorty.jpeg'
import rick1 from '@/assets/rick1.jpeg'
import rick2 from '@/assets/rick2.jpeg'
import rick3 from '@/assets/rick3.jpeg'
import rick4 from '@/assets/rick4.jpeg'
import rick5 from '@/assets/rick5.jpeg'
import rick6 from '@/assets/rick6.jpeg'

export const Home = () => {
  return (
    <>
      <div className="container max-w-7xl m-auto mb-9 min-h-screen">
        <div className="relative">
          <img
            src={bannerRickAndMorty}
            alt="Rick and Morty"
            className="w-full h-96 object-cover rounded-xl"
          />
          <h1 className="absolute bottom-11 right-5 text-2xl text-golden font-black md:text-6xl">
            Tarjetas de Rick and Morty
          </h1>
        </div>
        <Cart />

        <h2 className="text-3xl font-extrabold my-2">
          Novedades.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <Link to="/productos">
            <img src={rick1} alt="Rick 1" className="w-full h-96 object-cover rounded-xl" />
          </Link>

          <Link to="/productos">
            <img src={rick2} alt="Rick 2" className="w-full h-96 object-cover rounded-xl" />
          </Link>

          <Link to="/productos">
            <img src={rick3} alt="Rick 3" className="w-full h-96 object-cover rounded-xl" />
          </Link>
        </div>

        <h3 className="text-3xl font-extrabold my-2">
          Fant Art.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <Link to="/productos">
            <img src={rick4} alt="Rick 1" className="w-full h-96 object-cover rounded-xl" />
          </Link>

          <Link to="/productos">
            <img src={rick5} alt="Rick 2" className="w-full h-96 object-cover rounded-xl" />
          </Link>

          <Link to="/productos">
            <img src={rick6} alt="Rick 3" className="w-full h-96 object-cover rounded-xl" />
          </Link>
        </div>
      </div>
    </>
  )
}
