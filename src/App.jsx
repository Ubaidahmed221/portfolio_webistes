import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/AppLayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />
}

export default App
