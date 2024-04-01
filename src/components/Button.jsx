import { Link } from 'react-router-dom'

export const Button = ({route, text}) => {
  return (
    <Link
      className="flex w-24 h-9 items-center justify-center bg-green-500 hover:bg-blue-light text-white font-bold rounded"
      to={route}
    >
      {text}
    </Link>
  )
}
