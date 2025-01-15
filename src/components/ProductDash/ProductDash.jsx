import { Link } from "react-router-dom";

export default function ProductDash() {
  return (
    <div className="grid md:grid-cols-4 gap-5 shadow-md sm:grid-cols-2 bg-white p-5 mt-10 sm:w-screen mx-auto lg:w-[77.5%]">
      <Link to="/product?type=AC">
        <div className="flex justify-center items-center flex-col gap-10 p-6 h-full hover:border rounded-xl hover:bg-slate-100 cursor-pointer">
          <img src="/DashProduct/AC dash.png" alt="AC" className="w-96 " />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">AIR CONDITIONER</h2>
            <p className="text-slate-500 text-sm">4 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to="/product?type=TV">
        <div className="flex justify-center items-center flex-col gap-10 p-6 hover:border rounded-xl hover:bg-slate-100 cursor-pointer">
          <img
            src="/DashProduct/TvDash.png"
            alt="TV"
            className="w-64  rounded-md"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">AUDIO & VIDEO</h2>
            <p className="text-slate-500 text-sm">5 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=Gadgets"}>
        <div className="flex justify-center hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-3 p-6 cursor-pointer">
          <img src="/DashProduct/Gadgets.png" alt="AC" className="w-24" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">GADGETS</h2>
            <p className="text-slate-500 text-sm">6 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=HOME"}>
        <div className="flex justify-center hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-3 p-6 cursor-pointer">
          <img
            src="/DashProduct/WashingMachine.png"
            alt="AC"
            className="w-36"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">HOME APPLIANCES</h2>
            <p className="text-slate-500 text-sm">5 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=KITCHEN"}>
        <div className="flex justify-center  hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-10 p-6 cursor-pointer">
          <img
            src="/DashProduct/KitchenAppliances.png"
            alt="AC"
            className="w-56"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">KITCHEN APPLIANCES</h2>
            <p className="text-slate-500 text-sm">6 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=PC"}>
        <div className="flex justify-center hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-10 p-6 cursor-pointer">
          <img src="/DashProduct/laptops.png" alt="AC" className="w-96" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">PC & LAPTOPS</h2>
            <p className="text-slate-500 text-sm">4 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=REFRIGERATOR"}>
        {" "}
        <div className="flex justify-center hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-3 p-6 cursor-pointer">
          <img src="/DashProduct/Refri.png" alt="AC" className="w-44" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">REFRIGERATOR</h2>
            <p className="text-slate-500 text-sm">4 PRODUCTS</p>
          </div>
        </div>
      </Link>
      <Link to={"/product?type=SMART"}>
        <div className="flex justify-center hover:border rounded-xl hover:bg-slate-100 items-center flex-col gap-10 p-6 cursor-pointer">
          <img src="/DashProduct/SmartHome.png" alt="AC" className="w-36" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-center">SMART HOME</h2>
            <p className="text-slate-500 text-sm">5 PRODUCTS</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
