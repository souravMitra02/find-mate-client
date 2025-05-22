import image1 from '../assets/dhaka.jpg'
import image2 from '../assets/barishal.jpg'
import image3 from '../assets/Rajshahi.jpg'
import image4 from '../assets/Khulna.jpg'
import { IoLocationSharp } from 'react-icons/io5'

const TopCitiesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10">
        Top Cities in Bangladesh
      </h2>

    <div className="grid grid-cols-3 gap-6">
  {/* Left Side: One Large City */}
  <div className="relative group overflow-hidden">
  <img src={image1} alt="" className="w-full h-[420px] object-cover rounded-xl" />

  <h2 className="text-lg font-semibold flex items-center gap-2 bg-white/60 px-4 py-2 absolute left-10 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[75%] group-hover:top-5">
    <IoLocationSharp />
    Dhaka
  </h2>
</div>


  {/* Middle: Three Smaller Cities */}
  <div className="flex flex-col gap-5">
  <div className="relative group overflow-hidden">
  <img src={image2} alt="" className="w-full h-[200px] object-cover rounded-xl" />

  <h2 className="text-sm font-medium flex items-center gap-2 bg-white/60 px-3 py-1 absolute left-5 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[70%] group-hover:top-3">
    <IoLocationSharp />
    Barishal
  </h2>
</div>

   <div className="relative group overflow-hidden">
  <img src={image3} alt="" className="w-full h-[200px] object-cover rounded-xl " />

  <h2 className="text-sm font-medium flex items-center gap-2 bg-white/60 px-3 py-1 absolute left-5 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[70%] group-hover:top-3">
    <IoLocationSharp />
    Rajshahi
  </h2>
</div>

  </div>

  {/* Right Side: One Medium City */}
 <div className="relative group overflow-hidden">
  <img src={image4} alt="" className="w-full h-[420px] object-cover rounded-xl" />

  <h2 className="text-lg flex items-center gap-2 bg-white/60 px-4 py-2 font-semibold absolute left-10 text-white backdrop-blur-sm rounded transition-all duration-500 ease-in-out top-[75%] group-hover:top-5">
    <IoLocationSharp />
    Khulna
  </h2>
</div>



</div>

    </section>
  );
};

export default TopCitiesSection;
