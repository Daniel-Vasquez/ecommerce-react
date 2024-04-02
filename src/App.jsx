import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartProvider } from '@/context/cart.jsx'
import { CartPage } from '@/pages/ProductsPage.jsx'
import { Checkout } from '@/pages/Checkout.jsx'
import { ProductDetails } from '@/pages/ProductDetails.jsx'
import { Home } from '@/pages/Home.jsx';
import { Header } from '@/components/Header.jsx';
import { Login } from '@/pages/Login';

function App() {
  const tokenAcess = useSelector(state => state.token)
  const AuthPageHome = tokenAcess ? <Home /> : <Navigate replace to={"/"} />;
  const AuthPageProducts = tokenAcess ? <CartPage /> : <Navigate replace to={"/"} />;
  const AuthPageDetailsProduct = tokenAcess ? <ProductDetails /> : <Navigate replace to={"/"} />;
  const AuthPageCheckout = tokenAcess ? <Checkout /> : <Navigate replace to={"/"} />;

  return (
    <CartProvider>
      <Router>
        <Header>
          <div className="app">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route
                exact
                path='/home'
                element={AuthPageHome}
              />
              <Route
                exact
                path='/productos/'
                element={AuthPageProducts}
              />  
              <Route
                exact
                path='/productos/:idProduct'
                element={AuthPageDetailsProduct}
              />
              <Route
                exact
                path='/carrito'
                element={AuthPageCheckout}
              />
            </Routes>
          </div>
        </Header>
      </Router>
    </CartProvider>
  );
}

export default App;