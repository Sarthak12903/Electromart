import { Slider } from "@radix-ui/themes";

export default function Filters() {
  return (
    <div>
      <h1 className="text-xl font-semibold p-2 border-b-2">Filters</h1>
      <div className="m-2">
        <h3 className="font-semibold">PRICE</h3>
        <Slider defaultValue={[25, 75]} className="outline-none" />
      </div>
    </div>
  );
}
