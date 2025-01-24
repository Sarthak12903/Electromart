import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className=" w-[30rem] mx-2 p-8 flex flex-col gap-4  bg-white rounded-xl shadow-xl">
      <div className="flex border-b-2 border-yellow-400 pb-2 gap-1 items-center mb-3 mx-auto">
        {" "}
        <h1 className="text-4xl text-[#324dae] font-bold ">Login</h1>
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

      <div className="text-sm flex gap-1">
        <p className=" font-semibold text-slate-600">Doesn't have account?</p>
        <Link
          to={"/register"}
          className="text-blue-700 underline hover:text-blue-900"
        >
          Register Here
        </Link>
      </div>
      <div>
        <button className="py-2 mt-10  w-full rounded-lg bg-[#324dae] hover:bg-blue-900 active:scale-[0.98] text-white">
          Login
        </button>
      </div>
    </form>
  );
}
