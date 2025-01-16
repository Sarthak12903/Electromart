import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import {
  AC,
  TV,
  Gadgets,
  HOME,
  KITCHEN,
  PC,
  REFRIGERATOR,
  SMART,
} from "../../Constants/Contants";
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
  } else if (productType === "PC") {
    filteredProducts = PC.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      if (maxSlider === 100000) {
        return price >= minSlider;
      } else {
        return price >= minSlider && price <= maxSlider;
      }
    });
  } else if (productType === "REFRIGERATOR") {
    filteredProducts = REFRIGERATOR.filter((value) => {
      const price = parseInt(value.price.replace(/,/g, ""), 10);
      if (maxSlider === 100000) {
        return price >= minSlider;
      } else {
        return price >= minSlider && price <= maxSlider;
      }
    });
  } else if (productType === "SMART") {
    filteredProducts = SMART.filter((value) => {
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
      {[
        "HOME",
        "TV",
        "AC",
        "Gadgets",
        "PC",
        "REFRIGERATOR",
        "iphone",
        "airpods",
        "watch",
        "s24",
        "buds3",
      ].includes(productType) && (
        <div className="flex flex-[10] bg-white gap-1 flex-col shadow-md pb-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((value) => (
              <Link
                key={value.number}
                className="group m-6"
                to={"/productDetail"}
              >
                {" "}
                <div className="bg-white h-60  flex gap-2 rounded-md p-6">
                  <div className="w-64 h-full flex justify-center   flex-[2] items-center">
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
                    {productType === "PC" && (
                      <ul className="list-disc p-4 text-sm ">
                        <li>{value.processor}</li>
                        <li>{value.ram}</li>
                        <li>{value.operatingSystem} Operating System</li>
                        <li>{value.ssd} SSD</li>
                        <li>{value.display}</li>
                        <li>
                          {value.productWarranty
                            ? `${value.productWarranty}  Onsite Warranty On Product`
                            : ""}
                          {value.carryonWarranty
                            ? ` and ${value.carryonWarranty}  Carry-in Warranty `
                            : ""}
                        </li>
                      </ul>
                    )}
                    {productType === "REFRIGERATOR" && (
                      <ul className="list-disc p-4 text-sm ">
                        <li>{value.compressor} Compressor</li>
                        <li>{value.stabilizer}</li>
                        <li>
                          {value.productWarranty
                            ? `${value.productWarranty} Warranty On Product`
                            : ""}
                          {value.compressorWarranty
                            ? ` and ${value.compressorWarranty}  Carry-in Warranty `
                            : ""}
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="flex-[2] flex flex-col   py-6 gap-2">
                    <h1 className="flex gap-1 items-center text-3xl font-bold">
                      <MdOutlineCurrencyRupee />
                      {value.price}
                    </h1>
                    {value.originalPrice && (
                      <p className="flex gap-1 text-green-700 font-medium">
                        <span className="flex items-center line-through text-black">
                          <MdOutlineCurrencyRupee />
                          {value.originalPrice}
                        </span>
                        {value.offer}% off
                      </p>
                    )}
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

      {["KITCHEN", "SMART"].includes(productType) && (
        <div className=" flex-[10] grid h-fit bg-white overflow-hidden   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  shadow-md p-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((value) => (
              <Link
                key={value.number}
                to={"/productDetail"}
                className="group sm:w-[9.5rem]  md:mx-0 md:w-auto "
              >
                <div className="flex flex-col rounded-md h-fit m-2 md:m-0 sm:w-[10.4rem] md:w-auto cursor-pointer p-2 md:p-6 hover:shadow-xl hover:scale-105 transition-all ease-linear duration-200 ">
                  <div className="w-full ">
                    <img
                      src={value.img}
                      className={`${
                        value.size && value.size
                      } sm:-translate-x-4 lg:translate-x-0`}
                    />
                  </div>
                  <div className="leading-tight sm:mr-[2.2rem] md:mr-0">
                    <h4 className="line-clamp-2 sm:text-xs  md:text-sm group-hover:text-blue-700">
                      {value.nameDescription}
                    </h4>
                    <p className="text-xs text-slate-700 line-clamp-1">
                      {value.color}
                    </p>
                    {value.ratingStar && (
                      <span className="flex items-center text-xs gap-2 text-gray-500 font-semibold mt-1">
                        <button className="flex gap-1 justify-center items-center text-white text-[0.6]  bg-green-600 px-1 m-1 rounded-sm">
                          {value.ratingStar}
                          <FaStar
                            fill="white"
                            className="text-white md:w-3 md:h-3 w-2 h-2"
                          />
                        </button>{" "}
                        <span>({value.ratingNumber})</span>
                      </span>
                    )}
                    <div className="flex-[2] flex flex-col lg:flex-row  lg:items-center   ">
                      <h1 className="flex gap-1 items-center text-sm font-bold">
                        <MdOutlineCurrencyRupee />
                        {value.price}
                      </h1>
                      {value.originalPrice && (
                        <p className="flex gap-1 flex-col md:flex-row justify-start text-green-700 md:text-sm text-[0.6rem]  font-medium">
                          <span className="flex items-center line-through text-slate-500">
                            <MdOutlineCurrencyRupee />
                            {value.originalPrice}
                          </span>
                          <span className="font-bold"> {value.offer}% off</span>
                        </p>
                      )}
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
                      {value.date && (
                        <p className="text-xs">
                          Free Delivery by{" "}
                          <span className="font-bold">{value.date}</span>
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
