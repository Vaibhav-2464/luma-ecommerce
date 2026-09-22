import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  return (
    <section className="px-8 py-12">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Your Cart
        </h1>

        {cart.length === 0 ? (

          <p className="text-gray-500">
            Your cart is empty.
          </p>

        ) : (

          <div>

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border-b py-5"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-fill rounded"
                  />

                  <div>
                    <h2 className="font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="mt-8 flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Total: ₹{total}
              </h2>
<Link to="/checkout">
  <button className="bg-black text-white px-6 py-3 rounded">
    Checkout
  </button>
</Link>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Cart;