function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10 mt-10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-xl font-bold">LUMA</h2>
          <p className="text-gray-400 text-sm mt-2">
            Simple products for everyday living.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Shop</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-5">
        <p className="text-gray-500 text-sm">
          © 2026 LUMA. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;