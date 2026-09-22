import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
  <nav className="flex items-center justify-between px-10 py-5 border-b bg-white sticky top-0 z-50">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold tracking-widest">
  LUMA
</h1>
      </div>

      {/* Navigation Links */}
     <div className="flex items-center gap-7 text-sm font-medium">
 <Link to="/#about" className="hover:text-gray-600">
  Home
</Link>

  <Link to="/shop" className="hover:text-gray-600">
    Shop
  </Link>

<div className="relative">
  <button
    onClick={() => setShowCategories(!showCategories)}
    className="hover:text-gray-600 cursor-pointer"
  >
    Categories
  </button>

  {showCategories && (
  <div className="absolute top-8 left-0 w-44 bg-white border rounded-lg shadow-lg p-2">
      <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
        Men
      </p>

      <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
        Women
      </p>

      <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
        Shoes
      </p>

      <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
        Accessories
      </p>
    </div>
  )}
</div>

<button
  onClick={() => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }}
  className="cursor-pointer"
>
  About
</button>
</div>
      {/* Right Side */}
   <div className="flex items-center gap-6 text-sm font-medium">

      <div className="relative">
  <Link to="/shop" className="hover:text-gray-600">
  Search
</Link>

  {showSearch && (
    <div className="absolute right-0 top-8">
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded-lg px-3 py-2 w-56"
      />
    </div>
  )}
</div>

       <Link to="/cart" className="hover:text-gray-600">
  Cart
</Link>

        <Link to="/account" className="hover:text-gray-600">
  Account
</Link>
      </div>

    </nav>
  )
}

export default Navbar