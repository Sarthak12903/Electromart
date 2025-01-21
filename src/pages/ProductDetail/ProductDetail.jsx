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

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name, productType } = useParams();

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

  const product = productList?.find((value) => value.nameDescription === name);
  console.log(product);
  if (!productList || !product) {
    return (
      <div className="h-96 w-full flex justify-center items-center text-gray-700">
        <h1 className="text-xl font-bold">Product Not Found</h1>
      </div>
    );
  }
  return (
    <>
      <div className="w-[85%] bg-white mx-auto p-4 flex">
        <div className="flex-[5] w-52 py-20">
          <img src={product.img} />
        </div>
        <div className="flex-[7]">{product.nameDescription}</div>
      </div>
    </>
  );
}
