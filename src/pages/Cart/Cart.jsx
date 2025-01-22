import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useState } from "react";
import { remove } from "@/app/cartSlice";
export default function Cart() {
  const item = useSelector((state) => state.cart.item);
  const product = useSelector((state) => state.cart.info);
  const [counter, setCounter] = useState({});
  const dispatch = useDispatch();
  const handleDecrease = (id) => {
    setCounter((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };
  const handleIncrease = (id) => {
    setCounter((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] || 1) + 1, 5),
    }));
  };
  return (
    <div className="w-[80%] flex p-6 mt-10 gap-10 rounded-lg shadow-xl bg-white">
      <div className="flex-[6] ">
        {product &&
          product.map((value, index) => (
            <div key={index} className="flex my-10 gap-2">
              <div className="flex-[5]">
                <img src={value.img} className=" w-full h-full" />
              </div>
              <div className="flex-[7] ">
                <h1 className="text-lg font-semibold w-[24rem] line-clamp-1">
                  {value.nameDescription}
                </h1>
                <span className="flex text-sm gap-2 items-center text-gray-500 font-semibold ">
                  <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 lg:px-1 m-1 rounded-sm">
                    {value.ratingStar || 3.9}
                    <FaStar fill="white" className="text-white w-3 h-3" />
                  </button>{" "}
                  <span>
                    {value.ratingNumber || "399"} Ratings{"  "}
                    <span>{`  & ${
                      value.reviewNumber || "1,088"
                    } Reviews`}</span>
                  </span>
                </span>
                <div className="flex items-center  gap-3 ">
                  <h1 className="flex  my-2 items-center text-xl font-bold">
                    <MdOutlineCurrencyRupee />
                    {value.price}
                  </h1>
                  <div className="w-fit  h-fit flex border-2 border-slate-500">
                    <button
                      onClick={() => handleDecrease(index)}
                      className="border-r-2 border-slate-500 px-2 hover:bg-slate-100 active:scale-95"
                    >
                      {" "}
                      {"<"}{" "}
                    </button>
                    <p className="px-5">{counter[index] || 1}</p>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="border-l-2 border-slate-500 px-2 hover:bg-slate-100 active:scale-95"
                    >
                      {" "}
                      {">"}{" "}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(remove(value.nameDescription))}
                  className="w-2/3 py-2 bg-red-500 hover:bg-red-700 active:scale-95 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-[6]">asd</div>
    </div>
  );
}
