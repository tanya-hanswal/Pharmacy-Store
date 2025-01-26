import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermCond from "./components/TermCond";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:category" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termCond" element={<TermCond />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
