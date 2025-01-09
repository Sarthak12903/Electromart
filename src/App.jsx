import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductList from "./pages/ProductList/ProductList";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center select-none">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
