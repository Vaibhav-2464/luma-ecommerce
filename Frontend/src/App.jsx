import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Layouts/Navbar'
import Sidebar from './Components/Layouts/Sidebar'
import Dashboard from './Pages/Dashboard'
import Hero from './Pages/Hero';
import FeaturedProducts from './Pages/FeaturedProducts';
import Categories from './Pages/Categories';
import WhyLuma from './Pages/WhyLuma';
import Footer from './Footer/Footer';
import Shop from './Shopping/Shop';
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Shopping/Cart";
import Checkout from "./Shopping/Checkout";
import AdminProducts from './AdminPanel/AdminProducts'
import Account from "./Account";
import AdminLayout from "./AdminPanel/AdminLayout";
import AdminOrders from "./AdminPanel/AdminOrders";
import AdminCategories from "./AdminPanel/AdminCategories";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyLuma />

      <section id="about" className="px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            About LUMA
          </h2>

          <p className="text-gray-600 leading-7">
            LUMA is a modern online store offering quality products
            across fashion, accessories and everyday essentials.
            We aim to provide a simple shopping experience with
            carefully selected products and reliable service.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}



function CustomerLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <CustomerLayout>
              <Home />
            </CustomerLayout>
          }
        />

        <Route
          path="/shop"
          element={
            <CustomerLayout>
              <Shop />
            </CustomerLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <CustomerLayout>
              <ProductDetails />
            </CustomerLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <CustomerLayout>
              <Cart />
            </CustomerLayout>
          }
        />

        <Route
          path="/checkout"
          element={
            <CustomerLayout>
              <Checkout />
            </CustomerLayout>
          }
        />

     
     <Route
  path="/admin"
  element={
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  }
/>

<Route
  path="/admin/products"
  element={
    <AdminLayout>
      <AdminProducts />
    </AdminLayout>
  }
/>
        <Route
  path="/account"
  element={
    <CustomerLayout>
      <Account />
    </CustomerLayout>
  }
/>
<Route
  path="/admin/orders"
  element={
    <AdminLayout>
      <AdminOrders />
    </AdminLayout>
  }
/>

<Route
  path="/admin/categories"
  element={
    <AdminLayout>
      <AdminCategories />
    </AdminLayout>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;