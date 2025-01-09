import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
export default function Products() {
  return (
    <div className="flex w-[95%] mx-auto mt-4 gap-3">
      <div className="bg-white flex-[2] rounded-md p-3">asd</div>
      <div className="bg-white h-60 flex-[10] flex rounded-md p-6">
        <div className="w-64 h-full flex justify-center flex-[2] items-center">
          <img src="/ProductList/Panasonic.png" alt="panasonic" />
        </div>
        <div className="p-3 flex-[6] flex flex-col pt-4">
          <div>
            <h1 className="text-lg font-medium tracking-tight text-black line-clamp-2">
              Panasonic 7 in 1 Convertible with True AI Mode 1.5 Ton 3 Star
              Split Inverter AC with Wi-fi Connect - White
              (CS-SU18ZKYWT/CU-SU18ZKYWT, Copper Condenser)
            </h1>
            <span className="flex text-sm gap-2 text-gray-500 font-semibold mt-1">
              <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 px-1 m-1 rounded-sm">
                4.1
                <FaStar fill="white" className="text-white w-3 h-3" />
              </button>{" "}
              25,279 Ratings & 2,554 Reviews
            </span>
          </div>
          <ul className="list-disc p-4 text-sm ">
            <li>Annual Power Usage: 1002.31 W</li>
            <li>Room Size: 11 - 150 sqft</li>
            <li>
              1 Year Warranty On Product, 5 Years Warranty On PCB and 10 Year
              Warranty on Compressor
            </li>
          </ul>
        </div>
        <div className="flex-[2] flex flex-col ite py-3 gap-2">
          <h1 className="flex gap-1 items-center text-3xl font-bold">
            <MdOutlineCurrencyRupee />
            36,990
          </h1>
          <p className="flex gap-1 text-green-700 font-medium">
            <span className="flex items-center line-through text-black">
              <MdOutlineCurrencyRupee />
              55,440
            </span>
            33% off
          </p>
          <p className="text-xs">
            Free Delivery by <span className="font-bold">Tomorrow</span>
          </p>
          <p className="text-sm text-green-700 rounded-md px-2 py-1 bg-green-100 w-fit">
            Hot Deal
          </p>
          <p className="flex items-center text-sm">
            Upto <MdOutlineCurrencyRupee />{" "}
            <span className="font-bold">5,100</span> Off on Exchange
          </p>
        </div>
      </div>
    </div>
  );
}
