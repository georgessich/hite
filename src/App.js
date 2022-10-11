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
import Payment from "./pages/payment/Payment";
import Delivery from "./pages/delivery/Delivery";
import Error from "./pages/error/Error";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import SearchResult from "./pages/searchResult/SearchResult";
import CheckoutSuccess from "./pages/checkoutSuccess/CheckoutSuccess";
function App() {
  return (
    <section className="main-section">
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/hite/" element={<Main />} />
          <Route exact path="/hite/shop/" element={<Shop />} />
          <Route path="/hite/shop/:categoryName" element={<Shop />} />
          <Route path="/hite/shop/product/:slug" element={<ItemCard />} />
          <Route path="/hite/cart" element={<Cart />} />
          <Route path="/hite/checkout" element={<Checkout />} />
          <Route path="/hite/success" element={<CheckoutSuccess/>} />
          <Route path="/hite/favourites" element={<Favourites />} />
          <Route path="/hite/about" element={<About />} />
          <Route path="/hite/privacy" element={<PrivacyPolicy />} />
          <Route path="/hite/payment" element={<Payment />} />
          <Route path="/hite/delivery" element={<Delivery />} />
          <Route path="/hite/search/:searchQuery" element={<SearchResult />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </section>
  );
}

export default App;
