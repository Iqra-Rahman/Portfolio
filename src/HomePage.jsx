import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HomePage() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></>
    },
    {
      path: "/projects",
      element:<><Navbar/><Projects/></>
    },
    // {
    //   path: "/certificates",
    //   element:<><Navbar/><Certificates/></>
    // },
    {
      path: "/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path: "/resume",
      element:<><Navbar/><Resume/></>
    },
  ])

  return (
    <>
      <div className="appBody"><RouterProvider router={router}/></div>
    </>
  )
}

export default HomePage;
