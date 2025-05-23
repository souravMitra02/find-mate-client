import image1 from "../assets/dhaka.jpg";
import image2 from "../assets/barishal.jpg";
import image3 from "../assets/Rajshahi.jpg";
import image4 from "../assets/Khulna.jpg";
import { IoLocationSharp } from "react-icons/io5";

const TopCitiesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10">
        Most Searched Cities for Roommate <span className="text-orange-500">Finder</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Side: One Large City */}
        <div className="relative group overflow-hidden">
          <img
            src={image1}
            alt="Dhaka"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
          <h2 className="text-lg font-semibold flex items-center gap-2 bg-white/60 px-4 py-2 absolute left-5 sm:left-10 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[75%] group-hover:top-5">
            <IoLocationSharp />
            Dhaka
          </h2>
        </div>

        {/* Middle: Two Smaller Cities (Stacked) */}
        <div className="flex flex-col gap-5">
          <div className="relative group overflow-hidden">
            <img
              src={image2}
              alt="Barishal"
              className="w-full h-[140px] sm:h-[200px] object-cover rounded-xl"
            />
            <h2 className="text-sm font-medium flex items-center gap-2 bg-white/60 px-3 py-1 absolute left-3 sm:left-5 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[70%] group-hover:top-3">
              <IoLocationSharp />
              Barishal
            </h2>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src={image3}
              alt="Rajshahi"
              className="w-full h-[140px] sm:h-[200px] object-cover rounded-xl"
            />
            <h2 className="text-sm font-medium flex items-center gap-2 bg-white/60 px-3 py-1 absolute left-3 sm:left-5 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[70%] group-hover:top-3">
              <IoLocationSharp />
              Rajshahi
            </h2>
          </div>
        </div>

        {/* Right Side: One Medium City */}
        <div className="relative group overflow-hidden">
          <img
            src={image4}
            alt="Khulna"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
          <h2 className="text-lg flex items-center gap-2 bg-white/60 px-4 py-2 font-semibold absolute left-5 sm:left-10 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[75%] group-hover:top-5">
            <IoLocationSharp />
            Khulna
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TopCitiesSection;
