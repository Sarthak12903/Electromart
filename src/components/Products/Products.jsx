import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AC } from "../../Constants/Contants";
export default function Products() {
  return (
    <div className="flex w-[95%] mx-auto mt-4 gap-3">
      <div className="bg-white flex-[2] rounded-md p-3">asd</div>
      <div className="flex flex-[10] gap-1 flex-col">
        {AC.map((value) => (
          <div
            key={value.number}
            className="bg-white h-60  flex rounded-md p-6"
          >
            <div className="w-64 h-full flex justify-center flex-[2] items-center">
              <img src={value.img} alt={value.name} />
            </div>
            <div className="p-3 flex-[6] flex flex-col pt-4">
              <div>
                <h1 className="text-lg font-medium tracking-tight text-black line-clamp-2">
                  {value.nameDescription}
                </h1>
                <span className="flex text-sm gap-2 text-gray-500 font-semibold mt-1">
                  <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 px-1 m-1 rounded-sm">
                    {value.ratingStar}
                    <FaStar fill="white" className="text-white w-3 h-3" />
                  </button>{" "}
                  {value.ratingNumber} Ratings & {value.reviewNumber} Reviews
                </span>
              </div>
              <ul className="list-disc p-4 text-sm ">
                <li>Annual Power Usage: {value.powerUsage} W</li>
                <li>Room Size: {value.roomSize}</li>
                <li>
                  {value.productWarranty
                    ? `${value.productWarranty}  Year Warranty On Product`
                    : ""}
                  {value.pcbWarranty
                    ? `, ${value.pcbWarranty} Years Warranty On PCB`
                    : ""}{" "}
                  and{" "}
                  {value.compressorWarranty
                    ? `${value.compressorWarranty} Year Warranty on Compressor`
                    : ""}
                </li>
              </ul>
            </div>
            <div className="flex-[2] flex flex-col ite py-3 gap-2">
              <h1 className="flex gap-1 items-center text-3xl font-bold">
                <MdOutlineCurrencyRupee />
                {value.price}
              </h1>
              <p className="flex gap-1 text-green-700 font-medium">
                <span className="flex items-center line-through text-black">
                  <MdOutlineCurrencyRupee />
                  {value.originalPrice}
                </span>
                {value.offer}% off
              </p>
              <p className="text-xs">
                Free Delivery by <span className="font-bold">{value.date}</span>
              </p>
              {value.hotDeal && (
                <p className="text-sm text-green-700 rounded-md px-2 py-1 bg-green-100 w-fit">
                  Hot Deal
                </p>
              )}
              <p className="flex items-center text-sm">
                Upto <MdOutlineCurrencyRupee />{" "}
                <span className="font-bold">5,100</span> Off on Exchange
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
