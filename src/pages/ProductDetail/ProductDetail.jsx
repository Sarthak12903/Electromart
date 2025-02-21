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
import { TiTick } from "react-icons/ti";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { add } from "@/app/cartSlice";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { number, productType } = useParams();
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [containerRect, setContainerRect] = useState(null);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const [toggel, setToggle] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRect) return;

    const rect = containerRect;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Ensure values stay within 0-100 range
    const boundedX = Math.max(0, Math.min(100, x * 100));
    const boundedY = Math.max(0, Math.min(100, y * 100));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseEnter = (e) => {
    setZoom(true);
    // Store the container dimensions when mouse enters
    setContainerRect(e.target.getBoundingClientRect());
  };

  const handleMouseLeave = () => {
    setZoom(false);
    setContainerRect(null);
  };

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
  const AddCart = () => {
    dispatch(add(product));
    setIsCartAnimating(true);
    setToggle(true);
    setTimeout(() => {
      setIsCartAnimating(false);
      setToggle(false);
    }, 2000);
  };

  return (
    <>
      <div className="lg:w-[80%] mt-10 overflow-x-hidden rounded-2xl shadow-xl relative flex-wrap flex-col md:flex-row bg-white md:mx-auto p-4 flex">
        <div
          className={`absolute top-0 ${
            toggel ? "translate-y-3 opacity-100" : "-translate-y-5 opacity-0"
          } border-slate-400 border shadow-xl w-96 flex transition-all ease-linear duration-200 gap-2 items-center bg-white px-8 py-2 inset-x-[36rem] rounded-lg`}
        >
          <div className="bg-green-500 p-2 rounded-full text-white">
            <TiTick />
          </div>
          You Have Added An Item In The Cart
        </div>
        <div className="flex-[5] flex justify-center items-center sm:m-0 py-10 md:py-20 relative">
          <div className="relative px-4 w-full flex justify-center">
            <img
              src={product.img || "/placeholder.svg"}
              className={`cursor-crosshair ${
                productType === "REFRIGERATOR" ? "w-48" : "w-full"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              alt={product.nameDescription}
            />
            {zoom && (
              <div
                className="hidden lg:block fixed left-2/3 top-20 w-[60rem] h-[80%] rounded-xl shadow-2xl bg-white"
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "200%",
                  backgroundPosition: `${position.x}% ${position.y}%`,
                  transform: "translateX(-50%)",
                  zIndex: 50,
                  border: "1px solid #e5e7eb",
                }}
              />
            )}
          </div>
        </div>
        <div className="flex-[7] flex md:p-10 flex-col">
          <h1 className="md:text-2xl w-full sm:text-lg mb-2 sm:line-clamp-2 lg:line-clamp-none font-semibold select-text">
            {product.nameDescription}
          </h1>
          <span className="flex text-sm gap-2 items-center text-gray-500 font-semibold my-2">
            <button className="flex gap-1 justify-center items-center text-white text-xs bg-green-600 lg:px-1 m-1 rounded-sm">
              {product.ratingStar || 3.9}
              <FaStar fill="white" className="text-white w-3 h-3" />
            </button>{" "}
            <span>
              {product.ratingNumber || "399"} Ratings{"  "}
              <span>{`  & ${product.reviewNumber || "1,088"} Reviews`}</span>
            </span>
          </span>
          <div className="m-2">
            <div className="gap-2">
              <h1 className="flex gap-1 my-2 items-center text-2xl font-bold">
                <MdOutlineCurrencyRupee />
                {product.price}
              </h1>
              <p className="flex gap-1 text-lg text-green-700 font-medium">
                <span className="flex items-center line-through text-black">
                  <MdOutlineCurrencyRupee />
                  {product.originalPrice}
                </span>
                <span>{product.offer}% off</span>
              </p>
            </div>
            <div className="flex items-center sm:flex md:hidden text-xs lg:text-lg mt-2 gap-4">
              <button
                onClick={AddCart}
                className={`flex justify-center items-center gap-1 py-4 flex-[6] md:px-6 md:py-4 rounded-lg text-white font-bold transition-all duration-300 ease-in-out ${
                  isCartAnimating
                    ? "bg-green-500 scale-105"
                    : "bg-yellow-400 hover:bg-yellow-600 hover:scale-95"
                }`}
                aria-label="Add to cart"
              >
                {isCartAnimating ? "Added!" : "Add To Cart"}
                <TiShoppingCart
                  className={`w-4 h-4 lg:w-6 lg:h-6 ${
                    isCartAnimating ? "animate-bounce" : ""
                  }`}
                />
              </button>
              <button className="bg-green-500 flex-[6] py-4 md:px-8 md:py-4 rounded-lg transition-all ease-linear duration-200 hover:scale-95 hover:bg-green-700 text-white font-bold">
                Buy Now
              </button>
            </div>
            <div>
              <h1 className="text-xl mt-4 mb-2 font-semibold">Key Features:</h1>
              {productType === "AC" && (
                <ul className="list-disc  pl-4 leading-8 font-medium  text-sm  ">
                  <li>Annual Power Usage: {product.powerUsage} W</li>
                  <li>Room Size: {product.roomSize}</li>
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty}  Year Warranty On Product`
                      : ""}
                    {product.pcbWarranty
                      ? `, ${product.pcbWarranty} Years Warranty On PCB`
                      : ""}{" "}
                    and{" "}
                    {product.compressorWarranty
                      ? `${product.compressorWarranty} Year Warranty on Compressor`
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "TV" && (
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm  ">
                  <li>Operating System: {product.operatingSystem} </li>
                  <li> {product.pixels}</li>
                  <li>Launch Year: {product.launch}</li>
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty}  Year Warranty On Product`
                      : ""}
                    {product.pcbWarranty
                      ? `, ${product.pcbWarranty} Years Warranty On PCB`
                      : ""}{" "}
                    {product.compressorWarranty
                      ? `and ${product.compressorWarranty}  Year Warranty on Compressor`
                      : ""}
                    {product.additionalWarranty
                      ? `and ${product.additionalWarranty}  Year Additional  Warranty on Panel`
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "Gadgets" && (
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm  ">
                  <li>
                    {product.ram && `${product.ram} RAM |`} {product.rom} ROM
                    {product.expandable &&
                      ` | Expandable ${product.expandable}`}{" "}
                  </li>
                  <li>{product.display}</li>
                  <li>
                    {product.rearCam} | {product.frontCam} Front Camera
                  </li>
                  {product.battery && <li>{product.battery} Battery</li>}
                  <li>{product.processor} Processor</li>
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty}   Warranty On Product`
                      : ""}
                    {product.AccessoryWarranty
                      ? ` and ${product.AccessoryWarranty}  Additional  Warranty on Aceesories`
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "HOME" && (
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm  ">
                  <li>{product.rpm} RPM MAX Speed</li>
                  <li>{product.star} Star Rating</li>
                  {product.builtinHeater && <li>With in Built Heater</li>}
                  {product.wifi && <li>With Wifi connectivity</li>}
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty}   Warranty On Product`
                      : ""}
                    {product.motorWarranty
                      ? ` and ${product.motorWarranty}  Additional  Warranty on Motor`
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "PC" && (
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm ">
                  <li>{product.processor}</li>
                  <li>{product.ram}</li>
                  <li>{product.operatingSystem} Operating System</li>
                  <li>{product.ssd} SSD</li>
                  <li>{product.display}</li>
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty}  Onsite Warranty On Product`
                      : ""}
                    {product.carryonWarranty
                      ? ` and ${product.carryonWarranty}  Carry-in Warranty `
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "REFRIGERATOR" && (
                <ul className="list-disc pl-4 leading-8 font-medium text-sm ">
                  <li>{product.compressor} Compressor</li>
                  <li>{product.stabilizer}</li>
                  <li>
                    {product.productWarranty
                      ? `${product.productWarranty} Warranty On Product`
                      : ""}
                    {product.compressorWarranty
                      ? ` and ${product.compressorWarranty}  Carry-in Warranty `
                      : ""}
                  </li>
                </ul>
              )}
              {productType === "KITCHEN" && (
                <ul className="list-disc pl-4 w-[40rem] text-justify leading-8 font-medium text-sm ">
                  <li>
                    High Precision Sensors: The scale uses a high-precision
                    strain gauge sensor system, ensuring accurate weighing
                    results.
                  </li>
                  <li>
                    Splash-Proof Design: The scale is splash-proof, making it
                    suitable for use in high-humidity environments like
                    kitchens.
                  </li>
                  <li>
                    Wide LCD Display: It has a large backlit LCD screen for easy
                    reading of measurements.
                  </li>
                  <li>
                    Tare Function: The scale includes a tare function, allowing
                    users to reset the scale to zero when measuring ingredients
                    in containers.
                  </li>
                  <li>
                    Battery Operated and Easy to Use: The scale is powered by
                    batteries and designed for user-friendly operation with
                    simple controls.
                  </li>
                </ul>
              )}
              {productType === "SMART" && (
                <ul className="list-disc pl-4 w-[40rem] text-justify leading-8 font-medium text-sm hidden lg:block">
                  <li>
                    Advanced 10-Stage Filtration: Incorporates RO, UV, and
                    Copper technologies to effectively remove impurities and
                    enrich water with essential minerals.
                  </li>
                  <li>
                    50% Water-Saving Technology: Designed to reduce water
                    wastage, purifying up to 12,000 liters with minimal water
                    loss.
                  </li>
                  <li>
                    Real-Time Monitoring via UC App: Enables users to monitor
                    purification status and filter performance using the Urban
                    Company app.
                  </li>
                  <li>
                    Space-Saving Wall-Mounted Design: Its sleek design is ideal
                    for wall mounting, saving counter space while providing
                    efficient water purification.tus and filter performance
                    using the Urban Company app.
                  </li>
                  <li>
                    User-Friendly Features: Includes preset dispensing modes, 8L
                    storage capacity, and easy-to-use functions, making it
                    suitable for family use.
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex items-center sm:hidden md:flex relative text-xs lg:text-lg mt-2 gap-4">
            <div className="relative">
              <button
                onClick={AddCart}
                className={`flex justify-center items-center gap-1 px-2 py-2 md:px-6 md:py-4 rounded-lg text-white font-bold transition-all duration-300 ease-in-out ${
                  isCartAnimating
                    ? "bg-green-500 scale-105"
                    : "bg-yellow-400 hover:bg-yellow-600 hover:scale-95"
                }`}
                aria-label="Add to cart"
              >
                {isCartAnimating ? "Added!" : "Add To Cart"}
                <TiShoppingCart
                  className={`w-4 h-4 lg:w-6 lg:h-6 ${
                    isCartAnimating ? "animate-bounce" : ""
                  }`}
                />
              </button>
            </div>
            <button className="bg-green-500 px-2 py-2 md:px-8 md:py-4 rounded-lg transition-all ease-linear duration-200 hover:scale-95 hover:bg-green-700 text-white font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
