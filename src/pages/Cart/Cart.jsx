import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useState, useCallback } from "react";
import { remove } from "@/app/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart.info);
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(products?.map((_, index) => [index, 1]) || [])
  );
  const dispatch = useDispatch();

  // Convert price string to number (e.g. "67,999" -> 67999)
  const parsePrice = (priceStr) => {
    return Number.parseInt(priceStr.replace(/,/g, ""), 10);
  };

  const handleQuantityChange = useCallback((id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min((prev[id] || 1) + change, 5)),
    }));
  }, []);

  const handleRemove = useCallback(
    (productName) => {
      dispatch(remove(productName));
    },
    [dispatch]
  );

  const calculateTotal = useCallback(() => {
    if (!products) return 0;
    return products.reduce((total, product, index) => {
      const price = parsePrice(product.price);
      return total + price * (quantities[index] || 1);
    }, 0);
  }, [products, quantities]);

  if (!products || products.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto">
                  <img
                    src={product.img || "/placeholder.svg"}
                    alt={product.nameDescription}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold line-clamp-2 mb-2">
                      {product.nameDescription}
                    </h2>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="bg-green-600 text-white px-2 py-1 rounded-sm flex items-center mr-2">
                        {product.ratingStar || 3.9} <FaStar className="ml-1" />
                      </span>
                      <span>
                        {product.ratingNumber || "399"} Ratings &{" "}
                        {product.reviewNumber || "1,088"} Reviews
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold flex items-center">
                        <MdOutlineCurrencyRupee />
                        {product.price}
                      </span>
                      <div className="ml-4 flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => handleQuantityChange(index, -1)}
                          className="px-3 py-1 hover:bg-gray-100 border-r"
                        >
                          -
                        </button>
                        <span className="px-4 py-1">
                          {quantities[index] || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(index, 1)}
                          className="px-3 py-1 hover:bg-gray-100 border-l"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(product.nameDescription)}
                      className="mt-2 sm:mt-0 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <ul className="list-disc  space-y-2">
                {products.map((product, index) => (
                  <li key={index} className="flex justify-between items-start">
                    <span className="line-clamp-1 -mt-1 flex-1 pr-4">
                      {product.nameDescription}
                    </span>
                    <span className="flex items-center flex-shrink-0">
                      <MdOutlineCurrencyRupee className="inline" />
                      {parsePrice(product.price) * (quantities[index] || 1)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-semibold">
                <span>Total:</span>
                <span className="flex items-center">
                  <MdOutlineCurrencyRupee className="inline" />
                  {calculateTotal().toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
