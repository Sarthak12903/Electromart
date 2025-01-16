import { Slider } from "@radix-ui/themes";
import { IoCloseSharp } from "react-icons/io5";

export default function Filters({
  minSlider,
  maxSlider,
  setMaxSlider,
  setMinSlider,
  selectedBrands,
  selectedDiscounts,
  selectedRatings,
  setSelectedBrands,
  setSelectedDiscounts,
  setSelectedRatings,
  filter,
  setFilter,
}) {
  const handleCheckboxChange = (setFunction, value) => {
    setFunction((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleClose = () => {
    setFilter(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b-2">
        <h1 className="text-xl font-semibold p-2    ">Filters</h1>
        {filter && (
          <button onClick={handleClose}>
            <IoCloseSharp />
          </button>
        )}
      </div>
      <div className="p-4 border-b-2">
        <h3 className="font-semibold">PRICE</h3>
        <Slider
          defaultValue={[0, 100000]}
          min={0}
          max={100000}
          step={20000}
          className="mt-3"
          value={[minSlider, maxSlider]}
          onValueChange={(values) => {
            setMinSlider(values[0]);
            setMaxSlider(values[1]);
          }}
        />
        <div className="w-full  flex lg:gap-2 justify-around mt-4 text-[0.8rem]">
          <select
            className="border"
            value={minSlider}
            onChange={(e) => {
              setMinSlider(Number(e.target.value));
            }}
          >
            <option value={0}>Min</option>
            <option value={20000}>₹ 20000</option>
            <option value={40000}>₹ 40000</option>
            <option value={60000}>₹ 60000</option>
            <option value={80000}>₹ 80000</option>
          </select>
          <span>To</span>
          <select
            className="border"
            value={maxSlider}
            onChange={(e) => setMaxSlider(Number(e.target.value))}
          >
            <option value={40000}>₹ 40000</option>
            <option value={60000}>₹ 60000</option>
            <option value={80000}>₹ 80000</option>
            <option value={100000}>₹ 100000+</option>
          </select>
        </div>
      </div>
      <div className="p-4 border-b-2">
        <h3 className="font-semibold mb-2">BRAND</h3>
        {["Panasonic", "Voltas", "Daikin", "LG"].map((brand) => (
          <label key={brand} className="block">
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={(e) =>
                handleCheckboxChange(setSelectedBrands, e.target.value)
              }
              className="mr-2"
            />
            {brand}
          </label>
        ))}
      </div>
      <div className="p-4 border-b-2">
        <h3 className="font-semibold mb-2">RATINGS</h3>
        {["4", "3", "2", "1"].map((rating) => (
          <label key={rating} className="block">
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={(e) =>
                handleCheckboxChange(setSelectedRatings, e.target.value)
              }
              className="mr-2"
            />
            {rating}★ & above
          </label>
        ))}
      </div>
      <div className="p-4 border-b-2">
        <h3 className="font-semibold mb-2">DISCOUNTS</h3>
        {["50", "40", "30", "20"].map((discount) => (
          <label key={discount} className="block">
            <input
              type="checkbox"
              value={discount}
              checked={selectedDiscounts.includes(discount)}
              onChange={(e) =>
                handleCheckboxChange(setSelectedDiscounts, e.target.value)
              }
              className="mr-2"
            />
            {discount}% & more
          </label>
        ))}
      </div>
    </div>
  );
}
