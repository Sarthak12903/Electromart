import { Link } from "react-router-dom";

export default function RegisterLogin() {
  return (
    <form className=" w-[20rem] mx-2 p-8 flex flex-col gap-3  bg-white rounded-xl shadow-xl">
      <div className="flex border-b-2 border-yellow-400 pb-2 gap-1 items-center mb-3 mx-auto">
        {" "}
        <h1 className="text-4xl text-[#324dae] font-bold ">Register</h1>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium" htmlFor="username">
          Username:
        </label>
        <input
          className="bg-slate-100 px-2 font-normal py-2 rounded-lg outline-none"
          type="text"
          id="username"
          placeholder="Enter Your Username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium" htmlFor="password">
          Password:
        </label>
        <input
          className="bg-slate-100 font-normal  px-2 py-2 rounded-lg outline-none"
          type="password"
          id="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xl font-medium" htmlFor="conpassword">
          Confirm Password:
        </label>
        <input
          className="bg-slate-100 font-normal  px-2 py-2 rounded-lg outline-none"
          type="password"
          id="conpassword"
          placeholder="Enter Confirm Password"
        />
      </div>
      <div className="text-xs flex gap-1">
        <p className=" font-semibold text-slate-600">Already Created?</p>
        <Link
          to={"/login"}
          className="text-blue-700 underline hover:text-blue-900"
        >
          Login Here
        </Link>
      </div>
      <div>
        <button className="p-1 my-2 w-full rounded-lg bg-[#324dae] hover:bg-blue-900 active:scale-[0.98] text-white">
          Create Account
        </button>
      </div>
    </form>
  );
}
