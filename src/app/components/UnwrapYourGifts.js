export default function UnwrapYourGifts() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full mt-8">
      <div className="md:w-1/2 w-full bg-starbucksGray  text-green-800 flex flex-col justify-center items-center px-6 py-10">
        <div className="text-4xl md:text-5xl text-center font-bold mb-4">
          Unwrap your first gift
        </div>
        <div className="text-xl md:text-2xl text-center md:mt-10 mt-4 mb-6">
          Join Starbucks® Rewards and get a free <br /> drink with qualifying
          purchase during your first week.**
        </div>
        <button className="border-green-800 font-bold text-green-800 border py-2 px-6 md:mt-10 mt-4 rounded-full hover:bg-gray-400 hover:text-white transition duration-300">
          Join now
        </button>
      </div>

      <div className="md:w-1/2 w-full">
        <img
          src="/Assets/137-95387.jpg"
          alt="Protein Box"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
