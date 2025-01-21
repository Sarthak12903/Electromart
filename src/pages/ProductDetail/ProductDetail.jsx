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
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
export default function ProductDetail() {
  const { number, productType } = useParams();
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [containerRect, setContainerRect] = useState(null);

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
  return (
    <>
      <div className="w-[80%]   bg-white mx-auto p-4 flex">
        <div className="flex-[5] flex justify-center items-center py-20 relative">
          <div className="relative w-96 flex justify-center">
            <img
              src={product.img || "/placeholder.svg"}
              className={` h-auto  cursor-crosshair ${
                productType === "REFRIGERATOR" ? "w-48 " : "w-full"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              alt={product.nameDescription}
            />
            {zoom && (
              <div
                className="hidden lg:block fixed left-2/3 top-20 w-[60rem] h-[80%] rounded-xl shadow-2xl bg-white  "
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
        <div className="flex-[7] p-10 flex flex-col ">
          <h1 className="text-2xl mb-2 font-semibold select-text">
            {product.nameDescription}
          </h1>
          <span className="flex text-sm gap-2 items-center text-gray-500 font-semibold my-2">
            <button className="flex gap-1 justify-center items-center text-white text-xs  bg-green-600 lg:px-1 m-1 rounded-sm">
              {product.ratingStar}
              <FaStar fill="white" className="text-white w-3 h-3" />
            </button>{" "}
            <span>
              {product.ratingNumber} Ratings{"  "}
              <span>{`  & ${product.reviewNumber} Reviews`}</span>
            </span>
          </span>
          <div className="m-2">
            <div className=" gap-2">
              <h1 className="flex gap-1 my-2 items-center text-2xl font-bold">
                <MdOutlineCurrencyRupee />
                {product.price}
              </h1>
              <p className="flex gap-1  text-lg text-green-700 font-medium">
                <span className="flex items-center line-through text-black">
                  <MdOutlineCurrencyRupee />
                  {product.originalPrice}
                </span>
                <span>{product.offer}% off</span>
              </p>
            </div>
            <div>
              <h1 className="text-xl mt-4 mb-2 font-semibold">
                Key Features:{" "}
              </h1>
              {productType === "AC" && (
                <ul className="list-disc  pl-4 leading-8 font-medium  text-sm hidden lg:block ">
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
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm hidden lg:block ">
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
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm hidden lg:block ">
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
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm hidden lg:block ">
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
                <ul className="list-disc pl-4 leading-8 font-medium  text-sm  hidden lg:block">
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
                <ul className="list-disc pl-4 leading-8 font-medium text-sm hidden lg:block">
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
                <ul className="list-disc pl-4 w-[40rem] text-justify leading-8 font-medium text-sm hidden lg:block">
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
          <div className="flex items-center mt-2 gap-4">
            <button className="flex justify-center items-center gap-1 bg-yellow-400 hover:scale-95 transition-all ease-linear duration-200 hover:bg-yellow-600 px-6 py-4 rounded-lg text-white font-bold">
              Add To Cart <TiShoppingCart className="w-6 h-6" />
            </button>
            <button className="bg-green-500 px-8 py-4 rounded-lg transition-all ease-linear duration-200 hover:scale-95 hover:bg-green-700 text-white font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
