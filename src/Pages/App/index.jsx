import { lazy, Suspense } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { CartContextProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import Footer from '../../Components/footer/index';

// Importa tus componentes usando React.lazy
const Home = lazy(() => import('../Home'));
const Contact = lazy(() => import('../Contact'));
const NotFound = lazy(() => import('../NotFound'));
const Navbar = lazy(() => import('../../Components/Navbar'));

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'contacto', element: <Contact /> },
    { path: '/*', element: <NotFound /> }
  ]);
  return routes;
};

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        {/* Usa Suspense para manejar la carga perezosa */}
        <Suspense fallback={<div>Cargando...</div>}>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </Suspense>
      </BrowserRouter>
      <Footer />
    </CartContextProvider>
  );
}

export default App;

