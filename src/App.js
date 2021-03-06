import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ItemCard from "./pages/shop/itemcard/ItemCard";
import Checkout from "./pages/checkout/Checkout";
import Favourites from "./pages/favourites/Favourites";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Payment from './pages/payment/Payment';
import Error from "./pages/error/Error";
function App() {
  return (
    <section className="main-section">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop/" element={<Shop />} />
        <Route path="/shop/:slug" element={<ItemCard />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/payment" element={<Payment />}/>
        <Route
          path="*"
          element={
            <Error />
          }
        />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
