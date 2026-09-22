import React from "react";

function Categories() {
  return (
    <section className="px-8 py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Explore
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="group h-56 rounded-xl overflow-hidden relative cursor-pointer">
            <img
              src="/images/Fashion.png"
              alt="Fashion"
              className="w-full h-full object-fill group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-5">
              <h3 className="text-white font-semibold text-xl">
                Fashion
              </h3>
            </div>
          </div>


          <div className="group h-56 rounded-xl overflow-hidden relative cursor-pointer">
            <img
              src="/images/Accessories.jpg"
              alt="Accessories"
              className="w-full h-full object-fill group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-5">
              <h3 className="text-white font-semibold text-xl">
                Accessories
              </h3>
            </div>
          </div>


          <div className="group h-56 rounded-xl overflow-hidden relative cursor-pointer">
            <img
              src="/images/Lifestyle.jpg"
              alt="Lifestyle"
              className="w-full h-full object-fill group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-5">
              <h3 className="text-white font-semibold text-xl">
                Lifestyle
              </h3>
            </div>
          </div>


          <div className="group h-56 rounded-xl overflow-hidden relative cursor-pointer">
            <img
              src="/images/Home.jpg"
              alt="Home"
              className="w-full h-full object-fill group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-5">
              <h3 className="text-white font-semibold text-xl">
                Home
              </h3>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Categories;