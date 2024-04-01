import { Navbar } from "./Navbar"

export function Header({ children }) {
  return (
    <header>
      <Navbar />
      {children}
    </header>
  )
}