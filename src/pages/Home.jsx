import { Link } from 'react-router-dom'
import { Cart } from '../components/Cart'

export const Home = () => {
  return (
    <>
      <Cart />
      <div>
        Home
        <Link to='/products'>
          Go to Products
        </Link>
      </div>
    </>
  )
}
