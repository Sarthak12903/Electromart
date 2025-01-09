import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiFallingStar } from "react-icons/gi";
import { CiBellOn, CiHeadphones } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
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
    <nav className="bg-[#324dae] text-white w-full">
      <div className="px-2 sm:px-4 py-2">
        <div className="flex items-center justify-around">
          <Link to={"/"}>
            <div className="flex-shrink-0">
              <h1 className="flex items-center text-lg sm:text-xl font-semibold gap-1">
                <GiFallingStar className="text-yellow-300 h-5 w-5" />
                <span className="inline md:text-2xl sm:text-base">
                  Electromart
                </span>
              </h1>
            </div>
          </Link>

          <div className={`hidden md:block flex-1 max-w-2xl px-4`}>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="text"
                placeholder="Search for Products and Brands"
                className="w-full py-1.5 px-4 pr-12 text-gray-700 bg-white rounded-md outline-none text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 text-gray-600 hover:text-gray-800"
              >
                <IoSearchSharp className="h-4 w-4" />
              </button>
            </form>
          </div>

          {isSearchVisible && (
            <div className="fixed inset-0 bg-[#2E3192] z-50 p-4">
              <div className="flex items-center gap-2">
                <button onClick={handleSearchToggle} className="p-2">
                  ←
                </button>
                <input
                  type="text"
                  placeholder="Search for Products and Brands"
                  className="w-full py-1.5 px-4 text-gray-700 bg-white rounded-md outline-none text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}

          <div className="flex items-center  gap-1 sm:gap-2">
            <button className="md:hidden p-2" onClick={handleSearchToggle}>
              <IoSearchSharp className="h-5 w-5" />
            </button>

            <div className="flex lg:-ml-16 sm:ml-0">
              {" "}
              <button className="p-2 flex items-center hover:bg-white/[0.3] rounded-lg">
                <FaOpencart className="h-5 w-5" />
                <span className="hidden md:inline ml-2">Cart</span>
              </button>
              <button className="hover:bg-white/[0.3] w-full p-2.5 text-start flex gap-2 items-center  rounded-lg sm:hidden md:flex">
                <CgProfile className="w-5 h-5" />
                Login
              </button>
            </div>

            <div className="relative" ref={menuRef}>
              <button className="p-2" onClick={handleToggle}>
                <BsThreeDotsVertical className="h-5 w-5" />
              </button>

              <ul
                className={`absolute w-56 sm:w-64 z-50 ${
                  toggle
                    ? "translate-y-0 opacity-100 visible"
                    : "-translate-y-2 opacity-0 invisible"
                } right-0 top-12 transition-all duration-150 ease-linear bg-white text-gray-700 shadow-xl rounded-lg py-2`}
              >
                <li className="md:hidden">
                  <button className="hover:bg-gray-50 w-full p-2.5 text-start flex gap-2 items-center">
                    <CgProfile className="w-5 h-5" />
                    Login
                  </button>
                </li>
                <li>
                  <button className="hover:bg-gray-50 w-full p-2.5 text-start flex gap-2 items-center">
                    <CiBellOn className="w-5 h-5" />
                    Notifications
                  </button>
                </li>
                <li>
                  <button className="hover:bg-gray-50 w-full p-2.5 text-start flex gap-2 items-center">
                    <CiHeadphones className="w-5 h-5" />
                    Customer Care
                  </button>
                </li>
                <li>
                  <button className="hover:bg-gray-50 w-full p-2.5 text-start flex gap-2 items-center">
                    <AiOutlineStock className="w-5 h-5" />
                    Advertise
                  </button>
                </li>
                <li>
                  <button className="hover:bg-gray-50 w-full p-2.5 text-start flex gap-2 items-center">
                    <span>?</span>
                    Become a Seller
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
