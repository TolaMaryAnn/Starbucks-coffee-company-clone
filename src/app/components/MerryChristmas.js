export default function MerryChristmas() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full mt-8">
      <div className="md:w-1/2 w-full">
        <img
          src="/Assets/137-96092.jpg"
          alt="Protein Box"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-starbucksMaroon text-white flex flex-col justify-center items-center px-6 py-10">
        <div className="text-4xl md:text-7xl text-center font-bold mb-4">
          Merry last-minute <br /> gifts
        </div>
        <div className="text-xl text-center md:text-3xl md:mt-10 mt-4 mb-6">
          There’s still time to send a holiday <br /> Starbucks eGift. Choose
          your favorite design <br /> and share some joy via text, social media
          or <br /> email.
        </div>
        <button className="border-white font-bold text-white border py-2 px-6 md:mt-10  mt-4 rounded-full hover:bg-gray-400 hover:text-white transition duration-300">
          Send an eGift
        </button>
      </div>
    </section>
  );
}
