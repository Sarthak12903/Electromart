import { GiFallingStar } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white w-full p-5 py-16 rounded-2xl shadow-xl mt-10">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-20   justify-around">
        <div>
          <div className="flex-shrink-0 ">
            <Link to={"/"}>
              <h1 className="flex items-center text-lg sm:text-xl text-slate-500 font-semibold gap-1">
                <GiFallingStar className=" h-5 w-5" />
                <span className="inline md:text-2xl sm:text-base">
                  Electromart
                </span>
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-7">Shop</h2>
          <ul className="text-blue-600">
            <li className="cursor-pointer">Hot deals</li>
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">Brands</li>
            <li className="cursor-pointer">Rebates</li>
            <li className="cursor-pointer">Weekly deals</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-7">Need Help?</h2>
          <ul className="text-blue-600">
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Order Tracking</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Return Policy</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-7">Contact</h2>
          <ul className="text-blue-600">
            <li className="cursor-pointer">
              Saixxxdanvan Society, Wadgaon xxx, Pune
            </li>
            <li className="cursor-pointer">4XX014</li>
            <li className="cursor-pointer">sarthakXXX@gmail.com</li>
            <li className="cursor-pointer">79721XXX32</li>
            <li className="cursor-pointer"></li>
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
