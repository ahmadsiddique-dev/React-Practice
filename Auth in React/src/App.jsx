import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const navItems = [
    {
      name : "Log In",
      slug : "/login",
      status : true
    },
    {
      name : "Sign Up",
      slug : "signup",
      status : true
    },
    {
      name : "Home",
      slug : "/",
      status : true
    },
    {
      name : "Dashboard",
      slug : "/dashboard",
      status : false
    },
    {
      name : "About",
      slug : "/about",
      status : false
    },
    {
      name : "Contact",
      slug : "/contact",
      status : false
    },
    {
      name : "Pricing",
      slug : "/pricing",
      status : true
    },
    {
      name : "Logout",
      slug : "/logout",
      status : false
    }
  ]

  return (
    <>

    {navItems.map((e) => {
      // {e.status ?  : ""}
    })}

    <div className="bg-orange-400  relative top-2 max-w-[95vw] m-auto grid grid-cols-12 items-center justify-between rounded-md shadow-xl">
  <p className="ml-2 col-span-6 md:col-span-8">Logo</p>
  <ul className=" flex  max-h-14 min-h-14 md:col-span-3 justify-evenly items-center text-white rounded-xl col-span-4 font-semibold text-md">
    <li className="cursor-pointer hover:text-gray-100"><Link to="/about">About</Link></li>
    <li className="cursor-pointer hover:text-gray-100">Pricing</li>
  </ul>
  <button className="bg-blue-500 mr-2 max-w-20 py-1.5 font-semibold rounded-md hover:cursor-pointer hover:opacity-95 active:bg-blue-400 text-white md:col-span-1 col-span-2">
    Logout
  </button>
</div>
<main>
  {<Outlet/>}
</main>

      {/* <div classNameName="bg-orange-400  relative top-2 max-w-[95vw] m-auto grid grid-cols-12 items-center justify-between rounded-md shadow-xl">
  <p classNameName="ml-2 col-span-3 md:col-span-7">Logo</p>
  <ul classNameName=" flex  max-h-14 min-h-14 md:col-span-4 col-span-7 justify-evenly items-center text-white rounded-xl font-semibold text-md">
    <li classNameName="cursor-pointer hover:text-gray-100">About</li>
    <li classNameName="cursor-pointer hover:text-gray-100">Contact</li>
    <li classNameName="cursor-pointer hover:text-gray-100">Service</li>
  </ul>
  <button classNameName="bg-blue-500 mr-2 max-w-20 py-1.5 font-semibold rounded-md hover:cursor-pointer hover:opacity-95 active:bg-blue-400 text-white md:col-span-1 col-span-2">
    Logout
  </button>
</div> */}
    </>
  )
}

export default App
