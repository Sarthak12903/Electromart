import {
  AC,
  Gadgets,
  HOME,
  KITCHEN,
  PC,
  REFRIGERATOR,
  SMART,
  TV,
} from "@/Constants/Contants";
import { FaStar } from "react-icons/fa";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { number, productType } = useParams();

  const dataMap = {
    HOME: HOME,
    TV: TV,
    AC: AC,
    Gadgets: Gadgets,
    KITCHEN: KITCHEN,
    PC: PC,
    REFRIGERATOR: REFRIGERATOR,
    SMART: SMART,
  };

  const productList = dataMap[productType];

  const product = productList?.find((value) => value.number === Number(number));

  if (!productList || !product) {
    return (
      <div className="h-96 w-full flex justify-center items-center text-gray-700">
        <h1 className="text-xl font-bold">Product Not Found</h1>
      </div>
    );
  }
  return (
    <>
      <div className="w-[80%] bg-white mx-auto p-4 flex">
        <div className="flex-[5] flex justify-center items-center  py-20">
          <img src={product.img} className="w-96" />
        </div>
        <div className="flex-[7] p-10">
          <h1 className="text-xl font-semibold">{product.nameDescription}</h1>
          <span className="flex text-sm gap-2 text-gray-500 font-semibold mt-1">
            <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 lg:px-1 m-1 rounded-sm">
              {product.ratingStar}
              <FaStar fill="white" className="text-white w-3 h-3" />
            </button>{" "}
            <span className=" flex items-center gap-1">
              {product.ratingNumber} Ratings{"  "}
              <span className="sm:hidden lg:block">
                {`  & ${product.reviewNumber} Reviews`}
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
