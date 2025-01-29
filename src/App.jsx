import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></>
    },
    {
      path: "/projects",
      element:<><Navbar/><Projects/></>
    },
    {
      path: "/certificates",
      element:<><Navbar/><Certificates/></>
    },
    {
      path: "/contact",
      element:<><Navbar/><Contact/></>
    },
  ])

  return (
    <>
      <div className="appBody"><RouterProvider router={router}/></div>
    </>
  )
}

export default App
