function Shortner() {
  return (
    <div className="mb-[88px] py-2 px-6  maxw">
      <div className=" -mt-20 p-6 bg-Primary-DarkViolet bg-[url('/bg-shorten-mobile.svg')] bg-no-repeat bg-right-top rounded-xl flex flex-col sm:flex-row gap-4">
        <input
          className="p-3 text-Neutral-GrayishViolet font-poppins w-full rounded-md focus:border-blue-400"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="btn whitespace-nowrap py-3 rounded-md w-full sm:w-auto">
          Shorten It!
        </button>
      </div>
    </div>
  );
}
export default Shortner;
