import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiFallingStar } from "react-icons/gi";
import { CiBellOn, CiHeadphones } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-800 text-white p-4 lg:h-20 flex items-center sm:h-16 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 border-b-2 border-yellow-300 pb-2 sm:border-0">
          <h1 className="flex items-center text-xl sm:text-lg lg:text-3xl font-semibold gap-2">
            <GiFallingStar className="text-yellow-300" />
            Electromart
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg w-full mt-4 sm:mt-0 sm:mx-4">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="text"
              placeholder="Search for Products and Brands"
              className="w-full py-2 px-4 pr-12 text-black rounded-md outline-none text-sm sm:text-base"
              aria-label="Search for products and brands"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-slate-200 hover:bg-slate-300 text-blue-800 rounded-r-md"
            >
              <IoSearchSharp className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        {/* Action Items */}
        <ul className="flex items-center space-x-4 sm:space-x-2 mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg">
          <li>
            <button className="flex items-center px-4 py-2 bg-white text-blue-800 hover:bg-white/90 rounded-md font-medium">
              <CgProfile className="mr-2 h-5 w-5" />
              Login
            </button>
          </li>
          <li>
            <button className="flex items-center px-4 py-2 bg-transparent text-white hover:bg-white/20 rounded-md font-medium">
              <FaOpencart className="mr-2 h-5 w-5" />
              Cart
            </button>
          </li>
          <li className="hidden lg:block">
            <button className="px-4 py-2 text-white hover:bg-white/20 rounded-md font-medium">
              Become a Seller
            </button>
          </li>

          {/* Dropdown Menu */}
          <li className="relative" ref={menuRef}>
            <button
              className="p-3 text-white hover:bg-white/20 rounded-lg"
              onClick={handleToggle}
            >
              <BsThreeDotsVertical className="h-5 w-5" />
              <span className="sr-only">More options</span>
            </button>
            <ul
              className={`absolute w-64 z-50 ${
                toggle
                  ? "translate-y-1 opacity-100"
                  : "-translate-y-2 opacity-0"
              } right-0 top-12 border transition-all duration-150 ease-linear bg-white shadow-xl rounded-lg border-black py-4`}
            >
              <li>
                <button className="hover:bg-slate-100 w-full p-2 text-start flex gap-2 items-center">
                  <CiBellOn className="w-6 h-6" />
                  Notifications Preferences
                </button>
              </li>
              <li>
                <button className="hover:bg-slate-100 w-full p-2 text-start flex gap-2 items-center">
                  <CiHeadphones className="w-6 h-6" />
                  24X7 Customer Care
                </button>
              </li>
              <li>
                <button className="hover:bg-slate-100 w-full p-2 text-start flex gap-2 items-center">
                  <AiOutlineStock className="w-6 h-6" />
                  Advertise
                </button>
              </li>
              <li className="lg:hidden">
                <button className="hover:bg-slate-100 w-full p-2 flex items-center gap-2">
                  <span>?</span>
                  <span>Become a Seller</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
