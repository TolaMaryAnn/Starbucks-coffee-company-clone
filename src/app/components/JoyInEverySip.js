export default function JoyInEverySip() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full mt-8">
      <div className="md:w-1/2 w-full bg-starbucksGreen text-gray-800 flex flex-col justify-center items-center px-6 py-10">
        <div className="text-4xl md:text-7xl text-center font-bold mb-4">
          Joy in every sip
        </div>
        <div className="text-xl text-center md:text-3xl md:mt-10  mt-4 mb-6">
          Taste the magic of the holidays with a <br /> Peppermint Mocha,
          Caramel Brulée Latte or <br /> Chestnut Praline Latte.
        </div>
        <button className="border-gray-800 font-bold text-gray-800 border py-2 px-6 md:mt-10 mt-4 rounded-full hover:bg-gray-400 hover:text-white transition duration-300">
          Order now
        </button>
      </div>

      <div className="md:w-1/2 w-full">
        <img
          src="/Assets/137-95776.jpg"
          alt="Protein Box"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
