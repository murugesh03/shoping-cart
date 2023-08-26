import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import HomePage from './pages/homepage';
import Cart from './pages/cart';
import Header from './components/header';

const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
