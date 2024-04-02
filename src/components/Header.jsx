import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export function Header({ children }) {
  return (
    <header>
      <Navbar />
      {children}
      <Footer />
    </header>
  )
}