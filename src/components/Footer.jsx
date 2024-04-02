import { Link } from "react-router-dom"
export function Footer() {
  return (
    <footer className="container max-w-7xl m-auto py-3 bg-blue-light">
      <h2 className="text-lg text-white text-center">
        <h2>
          Creado por {" "}
          <Link
            className="text-golden font-bold hover:underline"
            to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
            target="_blank"
          >
            Daniel Vasquez
          </Link>
        </h2>
      </h2>
    </footer>
  )
}