import { useEffect, useState } from "react";

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetch("https://luma-ecommerce-lyjg.onrender.com/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <div className="mb-8">
        <p className="text-sm text-gray-500">
          Store Management
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Orders
        </h1>
      </div>


      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50 border-b">

            <tr>
              <th className="text-left px-6 py-4 text-sm">Order</th>
              <th className="text-left px-6 py-4 text-sm">Customer</th>
              <th className="text-left px-6 py-4 text-sm">Phone</th>
              <th className="text-left px-6 py-4 text-sm">Amount</th>
              <th className="text-left px-6 py-4 text-sm">Payment</th>
              <th className="text-left px-6 py-4 text-sm">Status</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.order_id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >

                <td className="px-6 py-4 font-semibold">
                  #{order.order_id}
                </td>

                <td className="px-6 py-4">
                  {order.customer_name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {order.phone}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ₹{order.total_amount}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {order.payment_method}
                </td>

                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                    {order.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminOrders;