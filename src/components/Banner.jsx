import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Typewriter } from "react-simple-typewriter";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner32.jpg';
import banner3 from '../assets/bannerroom.jpg';

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] mb-10">
      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg mb-5">
          Welcome to <span className="text-indigo-400">Roommate Finder</span>
          <span className="text-primary">
            <Typewriter
              words={[" Best Deals", " Perfect Match"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-base md:text-xl font-light drop-shadow-md mb-6">
          Find the perfect space <span className="font-semibold">and roommate</span> today!
        </p>
        <button className="btn btn-primary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
          Get Started
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {[banner1, banner2, banner3].map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Box */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-6 flex flex-col md:flex-row flex-wrap items-center gap-4 w-[95%] max-w-6xl z-30 justify-center md:justify-between">
        {/* Location Input */}
        <input
          type="text"
          placeholder="Location (e.g. Dhaka, Mirpur)"
          className="input input-bordered flex-1 min-w-[230px] md:min-w-[180px] focus:border-blue-600 focus:outline-none rounded-full p-4"
        />

        {/* Budget Input */}
        <input
          type="number"
          placeholder="Max Budget (e.g. 8000 Taka)"
          className="input input-bordered flex-1 min-w-[230px] md:min-w-[180px] focus:border-blue-600 focus:outline-none rounded-full p-4"
        />

        {/* Room Type Dropdown */}
        <select
          className="flex-1 min-w-[230px] md:min-w-[180px] rounded-full py-2 px-5 border border-gray-300 focus:border-blue-600 focus:outline-none bg-white"
          defaultValue=""
        >
          <option value="">Room Type</option>
          <option value="single">Single</option>
          <option value="shared">Shared</option>
          <option value="any">Any</option>
        </select>

        {/* Search Button */}
        <button type="button" className="btn btn-primary rounded-full min-w-[230px] md:min-w-[140px] px-6">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
