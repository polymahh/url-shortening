function Shortner() {
  return (
    <div>
      <div className="p-6 bg-Primary-DarkViolet bg-[url('/bg-shorten-mobile.svg')] rounded-xl flex flex-col gap-4">
        <input
          className="p-4 text-Neutral-GrayishViolet font-poppins w-full rounded-md "
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="btn rounded-md w-full">Shorten It!</button>
      </div>
    </div>
  );
}
export default Shortner;
