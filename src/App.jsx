import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartProvider } from '@/context/cart.jsx'
import { ProductsPage } from '@/pages/ProductsPage.jsx'
import { CartPage } from '@/pages/CartPage.jsx'
import { ProductDetails } from '@/pages/ProductDetails.jsx'
import { Home } from '@/pages/Home.jsx';
import { Header } from '@/components/Header.jsx';
import { Login } from '@/pages/Login';
import { NotFound } from './pages/NotFound';

function App() {
  const tokenAcess = useSelector(state => state.token)
  const AuthPageLogin = tokenAcess ? <Navigate replace to={"/home"} /> : <Login />;
  const AuthPageHome = tokenAcess ? <Home /> : <Navigate replace to={"/"} />;
  const AuthPageProducts = tokenAcess ? <ProductsPage /> : <Navigate replace to={"/"} />;
  const AuthPageDetailsProduct = tokenAcess ? <ProductDetails /> : <Navigate replace to={"/"} />;
  const AuthPageCheckout = tokenAcess ? <CartPage /> : <Navigate replace to={"/"} />;

  return (
    <CartProvider>
      <Router>
        <Header>
          <div className="app">
            <Routes>
              <Route
                path='/'
                element={AuthPageLogin}
              />
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
              <Route
                path='*'
                element={<NotFound />}
              />
            </Routes>
          </div>
        </Header>
      </Router>
    </CartProvider>
  );
}

export default App;