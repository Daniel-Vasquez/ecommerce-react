import { useSelector } from 'react-redux';
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export function Header({ children }) {
  const tokenAcess = useSelector(state => state.token)

  return (
    <header className="px-3">
      {tokenAcess && <Navbar />}
      {children}
      <Footer />
    </header>
  )
}