import { Router } from "express";
import React from "react";
import ReactDOM from "react-dom/client";

import './public/css/main.css';
import './public/js/sort.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/product', element: <Product /> },
  { path: '/register', element: <Register /> },
  { path: '/wishlist', element: <Wishlist /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
