export default function FeedingAmerica() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full mt-8">
      <div className="md:w-1/2 w-full">
        <img
          src="/Assets/Screenshot from 2024-12-11 08-22-27.png"
          alt="Protein Box"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-starbucksMaroon text-white flex flex-col justify-center items-center px-6 py-10">
        <div className="text-4xl md:text-5xl text-center font-bold mb-4">
          Buy a box, we’ll give back​
        </div>
        <div className="text-xl md:text-2xl text-center md:mt-10 mt-4 mb-6">
          In partnership with Feeding America®, <br /> protein box purchase
          helps support hunger <br /> relief in your community.***
        </div>
        <button className="border-white font-bold text-white border py-2 px-6 md:mt-10 mt-4 rounded-full hover:bg-gray-400 hover:text-white transition duration-300">
          Learn more
        </button>
      </div>
    </section>
  );
}
