import React from "react";

function Account() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          My Account
        </h1>

        <p className="text-gray-500 mb-8">
          Manage your account and orders
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Account Details */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Account Details
            </h2>

            <p className="text-gray-600 mb-2">
              Name: Guest User
            </p>

            <p className="text-gray-600 mb-2">
              Email: guest@example.com
            </p>

            <p className="text-gray-600">
              Phone: Not added
            </p>
          </div>

          {/* Orders */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              My Orders
            </h2>

            <p className="text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>

        </div>

        <button className="mt-8 border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Account;