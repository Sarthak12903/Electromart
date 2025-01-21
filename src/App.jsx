import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductList from "./pages/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import useScrollToTop from "./Hooks/Scroll";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return children;
};

export default function App() {
  return (
    <Theme>
      <div className="flex flex-col bg-slate-100  justify-center items-center select-none">
        <BrowserRouter>
          <ScrollToTopWrapper>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<ProductList />} />
              <Route
                path="/product/:productType/:number"
                element={<ProductDetail />}
              />
            </Routes>
            <Footer />
          </ScrollToTopWrapper>
        </BrowserRouter>
      </div>
    </Theme>
  );
}
