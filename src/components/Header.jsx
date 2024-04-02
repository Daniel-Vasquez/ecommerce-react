import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export function Header({ children }) {
  return (
    <header className="px-3">
      <Navbar />
      {children}
      <Footer />
    </header>
  )
}