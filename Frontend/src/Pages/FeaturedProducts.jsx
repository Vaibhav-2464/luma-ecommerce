import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <section className="px-8 py-16 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-end justify-between mb-10">

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Featured Products
            </h2>
          </div>

          <Link
            to="/shop"
            className="text-sm font-medium hover:underline"
          >
            View All →
          </Link>

        </div>


        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {products.slice(0, 8).map((product) => (

            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >

              {/* Image */}
              <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fill group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Product information */}
              <div className="mt-4">

                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {product.category}
                </p>

                <p className="font-semibold mt-2">
                  ₹{product.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;