import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


function Dashboard() {

  const [stats, setStats] = useState({});
  const [sales, setSales] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);


  useEffect(() => {

    fetch("https://luma-ecommerce-lyjg.onrender.com/admin/stats")
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.log(error);
      });


    fetch("https://luma-ecommerce-lyjg.onrender.comv/admin/sales")
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => {
        console.log(error);
      });


  fetch("https://luma-ecommerce-lyjg.onrender.com/admin/categories")
  .then((response) => response.json())
 .then((data) => {
  console.log("CATEGORIES:", data);
  console.log("CATEGORY FIRST:", data[0]);

  const formattedData = data.map((item) => ({
    ...item,
    totalProducts: Number(item.totalProducts)
  }));

  setCategories(formattedData);
})
  .catch((error) => {
    console.log(error);
  });

fetch("https://luma-ecommerce-lyjg.onrender.com/admin/order-status")
  .then((response) => response.json())
  .then((data) => {
  console.log("ORDER STATUS:", data);
  console.log("ORDER STATUS FIRST:", data[0]);

  const formattedData = data.map((item) => ({
    ...item,
    totalOrders: Number(item.totalOrders)
  }));

  setOrderStatus(formattedData);
})
  .catch((error) => {
    console.log(error);
  });
  }, []);


return (
  <div>

    

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <p className="text-sm text-gray-500">
            Welcome back
          </p>

          <h1 className="text-3xl font-bold mt-1">
            Dashboard
          </h1>
        </div>

        <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-500">
            Store Status
          </p>

          <p className="text-sm font-semibold text-green-600">
            ● Live
          </p>
        </div>

      </div>


      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">


        {/* Products */}

        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Total Products
            </p>

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              📦
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-5">
            {stats.totalProducts || 0}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Products in your store
          </p>

        </div>


        {/* Orders */}

        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Total Orders
            </p>

            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              🛍️
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-5">
            {stats.totalOrders || 0}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Orders received
          </p>

        </div>


        {/* Revenue */}

        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Total Revenue
            </p>

            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              ₹
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-5">
            ₹{stats.totalRevenue || 0}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Total sales generated
          </p>

        </div>


        {/* Pending */}

        <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Pending Orders
            </p>

            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              ⏳
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-5">
            {stats.pendingOrders || 0}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Orders waiting for processing
          </p>

        </div>

      </div>


      {/* Low Stock */}

      <div className="mt-5 bg-gradient-to-r from-gray-950 to-gray-800 rounded-2xl p-6 text-white flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-400">
            Inventory Alert
          </p>

          <h2 className="text-xl font-semibold mt-1">
            {stats.lowStockProducts || 0} products are running low
          </h2>
        </div>

        <div className="text-3xl">
          ⚠️
        </div>

      </div>


      {/* Sales */}

      <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">

        <div className="mb-6">

          <h2 className="text-xl font-semibold">
            Sales Overview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Revenue generated over time
          </p>

        </div>

        <div className="w-full h-[320px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={sales}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#111827"
                strokeWidth={3}
                dot={{ r: 4 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* Charts */}
    

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">


        {/* Categories */}

        <div className="bg-white border rounded-2xl p-6 shadow-sm">

  <h2 className="text-xl font-semibold">
    Products by Category
  </h2>

  <p className="text-sm text-gray-500 mt-1 mb-6">
    Product distribution
  </p>

  <div className="w-full h-[320px]">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={categories}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="category" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="totalProducts"
          fill="#111827"
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>

        {/* Order Status */}
 

       <div className="bg-white border rounded-2xl p-6 shadow-sm">

  <h2 className="text-xl font-semibold">
    Order Status
  </h2>

  <p className="text-sm text-gray-500 mt-1 mb-6">
    Current order distribution
  </p>

  <div className="w-full h-[320px]">

    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Pie
          data={orderStatus}
          dataKey="totalOrders"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        />

        <Tooltip />

        <Legend />

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>
      </div>

    </div>
  );
}

export default Dashboard;