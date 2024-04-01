import { Link } from 'react-router-dom'

export const Button = ({route, text}) => {
  return (
    <Link
      className="bg-green-500 hover:bg-blue-light text-white font-bold py-2 px-4 rounded"
      to={route}
    >
      {text}
    </Link>
  )
}
