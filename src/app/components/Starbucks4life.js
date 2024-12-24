export default function Starbucks4life() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full mt-8">
      <div className="md:w-1/2 w-full">
        <img
          src="/Assets/137-96033.jpg"
          alt="Protein Box"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-starbucksRed text-white flex flex-col justify-center items-center px-6 py-10">
        <div className="text-4xl md:text-7xl text-center font-bold mb-4">
          Our holiday game <br /> is here to play
        </div>
        <div className="text-xl text-center md:text-3xl mt-4 md:mt-10 mb-6">
          Pop in for chances to win $20,000 in Delta <br /> Gift Cards or
          Starbucks for Life!*
        </div>
        <button className="border-white font-bold text-white border py-2 px-6 md:mt-10 mt-4 rounded-full hover:bg-gray-400 hover:text-white transition duration-300">
          Play now
        </button>
      </div>
    </section>
  );
}
