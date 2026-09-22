function WhyLuma() {
  return (
    <section className="px-8 py-20 bg-white">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Why LUMA
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Everyday products, kept simple.
          </h2>

          <p className="text-gray-600 leading-7">
            We focus on useful products, simple designs and a shopping
            experience without unnecessary complexity.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              ✓
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Quality Products
            </h3>

            <p className="text-gray-500 text-sm leading-6">
              Products selected with everyday use in mind.
            </p>
          </div>


          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              ✓
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Simple Shopping
            </h3>

            <p className="text-gray-500 text-sm leading-6">
              Easy browsing and a straightforward checkout experience.
            </p>
          </div>


          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              ✓
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Fast Delivery
            </h3>

            <p className="text-gray-500 text-sm leading-6">
              We aim to make getting your order quick and convenient.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyLuma;