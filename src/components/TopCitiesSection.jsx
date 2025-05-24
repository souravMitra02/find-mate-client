import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import image1 from "../assets/dhaka.jpg";
import image2 from "../assets/barishal.jpg";
import image3 from "../assets/Rajshahi.jpg";
import image4 from "../assets/Khulna.jpg";

const TopCitiesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10">
        Most Searched Cities for Roommate <span className="text-orange-500">Finder</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Side: One Large City */}
        <div
          className="relative group overflow-hidden"
          data-tooltip-id="cityTooltip"
          data-tooltip-content="Dhaka"
        >
          <img
            src={image1}
            alt="Dhaka"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* Middle: Two Smaller Cities (Stacked) */}
        <div className="flex flex-col gap-5">
          <div
            className="relative group overflow-hidden"
            data-tooltip-id="cityTooltip"
            data-tooltip-content="Barishal"
          >
            <img
              src={image2}
              alt="Barishal"
              className="w-full h-[140px] sm:h-[200px] object-cover rounded-xl"
            />
          </div>

          <div
            className="relative group overflow-hidden"
            data-tooltip-id="cityTooltip"
            data-tooltip-content="Rajshahi"
          >
            <img
              src={image3}
              alt="Rajshahi"
              className="w-full h-[140px] sm:h-[200px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Side: One Medium City */}
        <div
          className="relative group overflow-hidden"
          data-tooltip-id="cityTooltip"
          data-tooltip-content="Khulna"
        >
          <img
            src={image4}
            alt="Khulna"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
        </div>
      </div>

      <ReactTooltip
        id="cityTooltip"
        place="top"
        effect="solid"
        className="bg-orange-500 text-white text-sm rounded-md px-3 py-1"
      />
    </section>
  );
};

export default TopCitiesSection;
