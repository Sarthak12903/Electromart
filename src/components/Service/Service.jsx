import { FaShippingFast } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa";
export default function Service() {
  return (
    <div className="flex flex-wrap lg:flex-row justify-center items-center sm:p-2 md:p-10 mt-10 gap-6 lg:gap-8 bg-white rounded-md border border-slate-200">
      <div className="flex items-center gap-4 lg:border-r border-slate-200 pr-8 w-72">
        <FaShippingFast className="w-6 h-6 text-blue-500" />
        <div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-600">When you spend $80 or more</p>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:border-r border-slate-200 pr-8 w-72">
        <RiMessage3Fill className="w-6 h-6 text-green-500" />
        <div>
          <h3 className="text-lg font-semibold">We are available 24 / 7</h3>
          <p className="text-sm text-gray-600">Need help? Contact us anytime</p>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:border-r border-slate-200 pr-8 w-72">
        <IoMdRefresh className="w-6 h-6 text-yellow-500" />
        <div>
          <h3 className="text-lg font-semibold">Satisfied or return</h3>
          <p className="text-sm text-gray-600">Easy 30-day return policy</p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-72">
        <FaRegCreditCard className="w-6 h-6 text-purple-500" />
        <div>
          <h3 className="text-lg font-semibold">100% Secure payments</h3>
          <p className="text-sm text-gray-600">
            Visa, Mastercard, Stripe, and PayPal
          </p>
        </div>
      </div>
    </div>
  );
}
