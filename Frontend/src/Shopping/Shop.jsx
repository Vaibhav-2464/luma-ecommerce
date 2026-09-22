import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-8 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Shop
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-3 w-full max-w-md mb-8"
      />

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg p-4 hover:shadow-md"
          >

            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-fill"
              />
            </div>

            <h2 className="font-semibold text-lg mt-4">
              {product.name}
            </h2>

            <p className="text-gray-500">
              {product.category}
            </p>

            <p className="font-bold mt-2">
              ₹{product.price}
            </p>

          </Link>
        ))}

      </div>

    </div>
  );
}

export default Shop;