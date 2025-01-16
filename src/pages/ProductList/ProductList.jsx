import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
export default function ProductList() {
  const [minSlider, setMinSlider] = useState(0);
  const [maxSlider, setMaxSlider] = useState(100000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div className="flex w-[95%] flex-col lg:flex-row mx-auto mt-4 gap-3">
      <div
        className={`bg-white  flex-[2] shadow-md rounded-md p-3 lg:block hidden`}
      >
        <Filters
          minSlider={minSlider}
          setMinSlider={setMinSlider}
          maxSlider={maxSlider}
          setMaxSlider={setMaxSlider}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedRatings={selectedRatings}
          selectedDiscounts={selectedDiscounts}
          setSelectedDiscounts={setSelectedDiscounts}
          setSelectedRatings={setSelectedRatings}
        />
      </div>
      <div className="lg:hidden   p-1">
        <button
          onClick={handleFilter}
          className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl active:scale-95 hover:bg-slate-200"
        >
          {" "}
          Filter: <FaFilter className="w-4 h-4" />
        </button>
        <div
          className={`bg-white absolute w-full z-50 inset-x-0 ${
            filter ? "flex translate-y-4 " : "-translate-y-2 opacity-0"
          }  flex-[2] shadow-md rounded-md transition-all ease-linear duration-200 p-3 `}
        >
          <Filters
            minSlider={minSlider}
            setMinSlider={setMinSlider}
            maxSlider={maxSlider}
            setMaxSlider={setMaxSlider}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedRatings={selectedRatings}
            selectedDiscounts={selectedDiscounts}
            setSelectedDiscounts={setSelectedDiscounts}
            setSelectedRatings={setSelectedRatings}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
      <Products
        minSlider={minSlider}
        maxSlider={maxSlider}
        selectedBrands={selectedBrands}
        selectedDiscounts={selectedDiscounts}
        selectedRatings={selectedRatings}
      />
    </div>
  );
}
