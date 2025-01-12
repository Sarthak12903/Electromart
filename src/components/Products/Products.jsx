import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AC, TV } from "../../Constants/Contants";
import { Link, useLocation } from "react-router-dom";
export default function Products({
  minSlider,
  maxSlider,
  selectedBrands,
  selectedDiscounts,
  selectedRatings,
}) {
  let filteredProducts = [];
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const productType = queryParams.get("type");
  if (productType === "AC") {
    filteredProducts = AC.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      return price >= minSlider && price <= maxSlider;
    });
  } else if (productType === "TV") {
    filteredProducts = TV.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      return price >= minSlider && price <= maxSlider;
    });
  }

  return (
    <div className="flex flex-[10] gap-1 flex-col shadow-md">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((value) => (
          <Link key={value.number} className="group">
            {" "}
            <div className="bg-white h-60  flex rounded-md p-6">
              <div className="w-64 h-full flex justify-center flex-[2] items-center">
                <img src={value.img} alt={value.name} />
              </div>
              <div className="p-3 flex-[6] flex flex-col pt-4">
                <div>
                  <h1 className="text-lg group-hover:text-blue-700 font-medium tracking-tight text-black line-clamp-2">
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
                  Free Delivery by{" "}
                  <span className="font-bold">{value.date}</span>
                </p>
                {value.hotDeal === "yes" && (
                  <p className="text-sm text-green-700 rounded-md px-2 py-1 bg-green-100 w-fit">
                    Hot Deal
                  </p>
                )}
                <p className="flex items-center text-sm">
                  Upto <MdOutlineCurrencyRupee />{" "}
                  <span className="font-bold">{value.cashback}</span> Off on
                  Exchange
                </p>
                {value.bankOffer === "yes" && (
                  <p className="text-sm text-green-700 rounded-md  font-bold w-fit">
                    Bank Offer
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex h-full justify-center items-center text-slate-600">
          No Products are Available
        </div>
      )}
    </div>
  );
}
