import React from "react";

function Hero() {
  return (
   <section className="bg-gray-50 px-10 py-14">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left */}
    <div>
      <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">
        Discover LUMA
      </p>

      <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Simple products.
        <br />
        Better living.
      </h1>

      <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">
        Discover carefully selected products designed for
        everyday style, comfort and convenience.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/shop"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Shop Now
        </a>

        <a
          href="#about"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-white transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Right */}
    <div className="h-[450px] bg-gray-200 rounded-2xl overflow-hidden">
      <img
        src="/images/Hero.jpg"
        alt="LUMA collection"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
  );
}

export default Hero;