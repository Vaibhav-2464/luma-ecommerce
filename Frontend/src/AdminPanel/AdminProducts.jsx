import { useEffect, useState } from "react";

function AdminProducts() {

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://luma-ecommerce-lyjg.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = (id) => {

    fetch(`https://luma-ecommerce-lyjg.onrender.com/products/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-8 py-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Admin Products
        </h1>

        <div className="border rounded-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Stock</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (

                <tr key={product.id} className="border-t">

                  <td className="p-4">
                    {product.name}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4">
                    ₹{product.price}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminProducts;