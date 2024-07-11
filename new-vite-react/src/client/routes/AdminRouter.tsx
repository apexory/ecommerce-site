import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from '../admin/pages/Home';
import Products from '../admin/pages/Products';
import Users from '../admin/pages/Users';

function Loading({ children }: any) {
  console.log(window.location.pathname)
  if(window.location.pathname == '/admin') {
    window.location.href = '/admin/home'
  }

  const [loading, setLoading] = useState(true)
  import('bootstrap/dist/css/bootstrap.min.css').then(() => setLoading(false))

  // @ts-ignore
  document.body.style = 'font-family: "Montserrat"; background-color: #35393d;';

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

export default function AdminRouter() {
  const [loading, setLoading] = useState(false)

  return (
      <RouterProvider router={ createBrowserRouter([
        { path: '/admin', element: (<Loading loading={ loading }><Outlet /></Loading>), errorElement: <div>admin error</div>, children: [
          { path: 'home', element: <Home /> },
          { path: 'products', element: <Products /> },
          { path: 'users', element: <Users /> },
        ]}
      ]) } />
  )
}