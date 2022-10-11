import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
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
        <HashRouter>
          <Route path="/" element={<Main />} />
          <Route exact path="/shop/" element={<Shop />} />
          <Route path="/shop/:categoryName" element={<Shop />} />
          <Route path="/shop/product/:slug" element={<ItemCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<CheckoutSuccess/>} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/search/:searchQuery" element={<SearchResult />} />
          <Route path="*" element={<Error />} />
        </HashRouter>
        <Footer />
      </ScrollToTop>
    </section>
  );
}

export default App;
