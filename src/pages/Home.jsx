import { Link } from 'react-router-dom'
import bannerRickAndMorty from '@/assets/rickAndMorty.jpeg'
import rick1 from '@/assets/rick1.jpeg'
import rick2 from '@/assets/rick2.jpeg'
import rick3 from '@/assets/rick3.jpeg'
import rick4 from '@/assets/rick4.jpeg'
import rick5 from '@/assets/rick5.jpeg'
import rick6 from '@/assets/rick6.jpeg'

export const Home = () => {
  return (
    <div className="container max-w-7xl m-auto mb-9 min-h-screen">
      <div className="relative">
        <img
          src={bannerRickAndMorty}
          alt="Rick and Morty"
          className="w-full h-96 object-cover rounded-xl my-5"
        />
        <h1 className="absolute top-11 right-5 text-lg text-golden font-black md:text-6xl">
          Tarjetas de Rick and Morty
        </h1>
      </div>

      <h2 className="text-3xl font-extrabold mt-7 mb-5">
        Novedades
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
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

      <h2 className="text-3xl font-extrabold mt-7 mb-5">
        Fant Art
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
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
  )
}
