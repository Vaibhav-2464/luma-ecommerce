import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const addToCart = () => {

  const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyAdded = oldCart.find((item) => item.id === product.id);

  if (alreadyAdded) {
    alert("Product already in cart");
    return;
  }

  oldCart.push(product);

  localStorage.setItem("cart", JSON.stringify(oldCart));

  alert("Product added to cart");
};

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {

    fetch(`https://luma-ecommerce-lyjg.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  return (
    <section className="px-8 py-12">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="h-96 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-fill"
          />
        </div>

        <div className="pt-4">

          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold mb-6">
            ₹{product.price}
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            {product.description}
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Stock: {product.stock}
          </p>

         <button
  onClick={addToCart}
  className="bg-black text-white px-7 py-3 rounded-md hover:bg-gray-800"
>
  Add to Cart
</button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;