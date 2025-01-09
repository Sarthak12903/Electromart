import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
export default function ProductList() {
  return (
    <div className="flex w-[95%] mx-auto mt-4 gap-3">
      <div className="bg-white flex-[2] shadow-md rounded-md p-3">
        <Filters />
      </div>
      <Products />
    </div>
  );
}
