import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from '../main/pages/Home';
import Cart from '../main/pages/Cart';
import Contact from '../main/pages/Contact';
import Login from '../main/pages/Login';
import Product from '../main/pages/Product';
import Register from '../main/pages/Register';
import Wishlist from '../main/pages/Wishlist';

import Header from '../main/components/Header';

function Loading({ children }: any) {
  const [loading, setLoading] = useState(true)
  import('../main/public/css/main.css').then(() => {
    // @ts-ignore
    import('../main/public/js/sort.js').then(() => setLoading(false))
  })

  return (
    <>
      { loading && (
        <p>Loading...</p>
      ) || (
        <>
          { children }
        </>
      )}
    </>
  )
}

export default function MainRouter() {
  const [loading, setLoading] = useState(false)

  return (
      <RouterProvider router={ createBrowserRouter([
        { path: '/', element: (<Loading loading={ loading }> <Header /><Outlet /> </Loading>), errorElement: <p>Error!</p>, children: [
          { path: '', element: <Home /> },
          { path: 'cart', element: <Cart /> },
          { path: 'contact', element: <Contact /> },
          { path: 'login', element: <Login /> },
          { path: 'product', element: <Product /> },
          { path: 'register', element: <Register /> },
          { path: 'wishlist', element: <Wishlist /> }, 
        ]}
      ])} />
  )
}