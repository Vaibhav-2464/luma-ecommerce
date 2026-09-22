import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-950 text-white p-6">

      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-widest">
          LUMA
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          ADMIN PANEL
        </p>
      </div>


      <div className="flex flex-col gap-2">

        <Link
          to="/admin"
          className="px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
        >
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
        >
          Orders
        </Link>

        <Link
          to="/admin/categories"
          className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
        >
          Categories
        </Link>

      </div>


      <div className="border-t border-gray-800 mt-10 pt-6">

        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Back to Store
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;