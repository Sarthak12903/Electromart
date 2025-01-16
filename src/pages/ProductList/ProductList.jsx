import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import { useState } from "react";
export default function ProductList() {
  const [minSlider, setMinSlider] = useState(0);
  const [maxSlider, setMaxSlider] = useState(100000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [filter, setFilter] = useState(false);

  return (
    <div className="flex w-[95%]  mx-auto mt-4 gap-3">
      <div
        className={`bg-white ${
          filter ? " w-[17rem] h-screen absolute z-30 " : "sm:w-12"
        } lg:flex-[2] shadow-md rounded-md p-3`}
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
