import { useSelector } from "react-redux";

export default function ProductDetail() {
  const number = useSelector((state) => state.ProductDetail.number);

  return (
    <div className="w-[85%] bg-white mx-auto p-4 flex">
      <div className="flex-[5]">
        <img />
      </div>
      <div className="flex-[7]">{number}</div>
    </div>
  );
}
