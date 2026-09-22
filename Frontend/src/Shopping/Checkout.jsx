
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");
  const [message, setMessage] = useState("");

  const placeOrder = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      setMessage("Cart is empty");
      return;
    }

    if (!name || !address || !phone) {
      setMessage("Please fill all the details");
      return;
    }

    let total = 0;

    cart.forEach((item) => {
      total = total + Number(item.price);
    });

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
    customer_name: name,
    address: address,
    phone: phone,
    payment_method: payment,
    total_amount: total
})
    })
      .then((data) => {

    console.log(data);

    localStorage.removeItem("cart");

    setMessage("Order placed successfully");

    setTimeout(() => {
        navigate("/");
    }, 1500);

})
      .catch((error) => {
        console.log(error);
        setMessage("Something went wrong");
      });
  };

  return (
    <section className="px-8 py-12">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="border rounded-lg p-6">

          <label className="block mb-2">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border rounded px-4 py-3 mb-5"
          />


          <label className="block mb-2">
            Address
          </label>

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            rows="4"
            className="w-full border rounded px-4 py-3 mb-5"
          />


          <label className="block mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full border rounded px-4 py-3 mb-5"
          />


          <label className="block mb-3">
            Payment Method
          </label>

          <div className="space-y-3 mb-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Cash on Delivery"
                checked={payment === "Cash on Delivery"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="UPI"
                checked={payment === "UPI"}
                onChange={(e) => setPayment(e.target.value)}
              />
              UPI
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Card"
                checked={payment === "Card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Card
            </label>

          </div>


          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-3 rounded"
          >
            Place Order
          </button>

          {message && (
            <p className="mt-5 text-center">
              {message}
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default Checkout;