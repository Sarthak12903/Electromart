export default function Filters() {
  return (
    <div>
      <h1 className="text-xl font-semibold p-2 border-b-2">Filters</h1>
      <div className="m-2">
        <h3 className="font-semibold">PRICE</h3>
        <input
          className="w-full p-2"
          min={0}
          max={100000}
          type="range"
          list="marker"
        />
        <datalist id="marker">
          <option value="20000"></option>
          <option value="40000"></option>
          <option value="60000"></option>
          <option value="80000"></option>
          <option value="100000"></option>
        </datalist>
      </div>
    </div>
  );
}
