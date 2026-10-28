import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="flex items-center justify-between bg-indigo-700 px-8 py-6 text-white">
  <h2 className="text-xl font-bold">MyWebsite</h2>

  <div className="flex items-center gap-8">
    <Link className="hover:text-indigo-300 font-bold" to="/">Home</Link>
    <Link className="hover:text-indigo-300 font-bold" to="/about">About</Link>
    <Link className="hover:text-indigo-300 font-bold" to= '/courses'>Courses</Link>
    <Link className="hover:text-indigo-300 font-bold" to="/product">Product</Link>
    
  </div>
</div>
  )
}

export default Navbar