import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { AC, TV, Gadgets, HOME, KITCHEN } from "../../Constants/Contants";
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
  } else if (productType === "Gadgets") {
    filteredProducts = Gadgets.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      if (maxSlider === 100000) {
        return price >= minSlider;
      } else {
        return price >= minSlider && price <= maxSlider;
      }
    });
  } else if (productType === "HOME") {
    filteredProducts = HOME.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      if (maxSlider === 100000) {
        return price >= minSlider;
      } else {
        return price >= minSlider && price <= maxSlider;
      }
    });
  } else if (productType === "KITCHEN") {
    filteredProducts = KITCHEN.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      if (maxSlider === 100000) {
        return price >= minSlider;
      } else {
        return price >= minSlider && price <= maxSlider;
      }
    });
  }

  return (
    <>
      {["HOME", "TV", "AC", "Gadgets", "PC"].includes(productType) && (
        <div className="flex flex-[10] bg-white gap-1 flex-col shadow-md pb-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((value) => (
              <Link key={value.number} className="group">
                {" "}
                <div className="bg-white h-auto  flex rounded-md p-6">
                  <div className="w-64 h-full flex justify-center flex-[2] items-center">
                    <img
                      src={value.img}
                      alt={value.name}
                      className={value.size && value.size}
                    />
                  </div>
                  <div className="p-3 flex-[6] flex flex-col pt-4">
                    <div>
                      <h1 className="text-lg group-hover:text-blue-700 font-semibold tracking-tight text-black line-clamp-2">
                        {value.nameDescription}
                      </h1>
                      <span className="flex text-sm gap-2 text-gray-500 font-semibold mt-1">
                        <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 px-1 m-1 rounded-sm">
                          {value.ratingStar}
                          <FaStar fill="white" className="text-white w-3 h-3" />
                        </button>{" "}
                        {value.ratingNumber} Ratings & {value.reviewNumber}{" "}
                        Reviews
                      </span>
                    </div>
                    {productType === "AC" && (
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
                    )}
                    {productType === "TV" && (
                      <ul className="list-disc p-4 text-sm ">
                        <li>Operating System: {value.operatingSystem} </li>
                        <li> {value.pixels}</li>
                        <li>Launch Year: {value.launch}</li>
                        <li>
                          {value.productWarranty
                            ? `${value.productWarranty}  Year Warranty On Product`
                            : ""}
                          {value.pcbWarranty
                            ? `, ${value.pcbWarranty} Years Warranty On PCB`
                            : ""}{" "}
                          {value.compressorWarranty
                            ? `and ${value.compressorWarranty}  Year Warranty on Compressor`
                            : ""}
                          {value.additionalWarranty
                            ? `and ${value.additionalWarranty}  Year Additional  Warranty on Panel`
                            : ""}
                        </li>
                      </ul>
                    )}
                    {productType === "Gadgets" && (
                      <ul className="list-disc p-4 text-sm ">
                        <li>
                          {value.ram && `${value.ram} RAM |`} {value.rom} ROM
                          {value.expandable &&
                            ` | Expandable ${value.expandable}`}{" "}
                        </li>
                        <li>{value.display}</li>
                        <li>
                          {value.rearCam} | {value.frontCam} Front Camera
                        </li>
                        {value.battery && <li>{value.battery} Battery</li>}
                        <li>{value.processor} Processor</li>
                        <li>
                          {value.productWarranty
                            ? `${value.productWarranty}   Warranty On Product`
                            : ""}
                          {value.AccessoryWarranty
                            ? ` and ${value.AccessoryWarranty}  Additional  Warranty on Aceesories`
                            : ""}
                        </li>
                      </ul>
                    )}
                    {productType === "HOME" && (
                      <ul className="list-disc p-4 text-sm ">
                        <li>{value.rpm} RPM MAX Speed</li>
                        <li>{value.star} Star Rating</li>
                        {value.builtinHeater && <li>With in Built Heater</li>}
                        {value.wifi && <li>With Wifi connectivity</li>}
                        <li>
                          {value.productWarranty
                            ? `${value.productWarranty}   Warranty On Product`
                            : ""}
                          {value.motorWarranty
                            ? ` and ${value.motorWarranty}  Additional  Warranty on Motor`
                            : ""}
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="flex-[2] flex flex-col  py-3 gap-2">
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
                    {value.cashback && (
                      <p className="flex items-center text-sm">
                        Upto <MdOutlineCurrencyRupee />{" "}
                        <span className="font-bold">{value.cashback} </span> Off
                        on Exchange
                      </p>
                    )}
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
      )}

      {productType === "KITCHEN" && (
        <div className=" flex-[10] grid bg-white grid-cols-4 gap-4 shadow-md p-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((value) => (
              <Link key={value.number} to={""} className="group">
                <div className="flex flex-col rounded-md h-fit cursor-pointer p-6 hover:shadow-xl hover:scale-105 transition-all ease-linear duration-200 ">
                  <div className="w-full ">
                    <img src={value.img} className={value.size} />
                  </div>
                  <div className="leading-tight">
                    <h4 className="line-clamp-2 group-hover:text-blue-700">
                      {value.nameDescription}
                    </h4>
                    <p className="text-xs text-slate-700">{value.color}</p>
                    <span className="flex items-center text-xs gap-2 text-gray-500 font-semibold mt-1">
                      <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 px-1 m-1 rounded-sm">
                        {value.ratingStar}
                        <FaStar fill="white" className="text-white w-3 h-3" />
                      </button>{" "}
                      ({value.ratingNumber})
                    </span>
                    <div className="flex-[2] flex  items-center   gap-2">
                      <h1 className="flex gap-1 items-center text-lg font-bold">
                        <MdOutlineCurrencyRupee />
                        {value.price}
                      </h1>
                      <p className="flex gap-1 text-green-700 text-sm font-medium">
                        <span className="flex items-center line-through text-slate-500">
                          <MdOutlineCurrencyRupee />
                          {value.originalPrice}
                        </span>
                        <span className="font-bold"> {value.offer}% off</span>
                      </p>
                    </div>
                    <div className=" flex flex-col gap-2">
                      {" "}
                      {value.freeDelivery === "yes" && (
                        <p className="text-xs  ">Free Delivery</p>
                      )}
                      {value.cashback && (
                        <p className="text-xs  ">
                          Upto{" "}
                          <span className="font-bold">
                            {value.cashback} Off on Exchange
                          </span>
                        </p>
                      )}
                      {value.hotDeal === "yes" && (
                        <p className="text-xs text-violet-800 rounded-md px-2 py-1 bg-violet-200 w-fit">
                          Hot Deal
                        </p>
                      )}
                      {value.bankOffer === "yes" && (
                        <p className="text-xs text-green-700 rounded-md  font-bold w-fit">
                          Bank Offer
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-[80rem] flex justify-center items-center text-slate-500">
              No Products are Available
            </div>
          )}
        </div>
      )}
    </>
  );
}
