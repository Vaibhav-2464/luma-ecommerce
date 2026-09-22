import React from "react";
import Sidebar from "../Components/Layouts/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;