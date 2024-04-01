import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/cart.jsx'
import { CartPage } from '@/pages/ProductsPage.jsx'
import { Checkout } from '@/pages/Checkout.jsx'
import { ProductDetails } from '@/pages/ProductDetails.jsx'
import { Home } from '@/pages/Home.jsx';
import { Header } from '@/components/Header.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header>
          <div className="app">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<CartPage />} />
              <Route path='/product/:idProduct' element={<ProductDetails />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </div>
        </Header>
      </Router>
    </CartProvider>
  );
}

export default App;