    import { useEffect, useState } from "react";

function AdminCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        const categoryData = {};

        data.forEach((product) => {
          if (categoryData[product.category]) {
            categoryData[product.category]++;
          } else {
            categoryData[product.category] = 1;
          }
        });

        const result = Object.entries(categoryData).map(
          ([name, totalProducts]) => ({
            name,
            totalProducts,
          })
        );

        setCategories(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm text-gray-500">Store Management</p>
        <h1 className="text-3xl font-bold mt-1">Categories</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white border rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>

            <p className="text-gray-500 mt-2">
              {category.totalProducts} Products
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCategories;