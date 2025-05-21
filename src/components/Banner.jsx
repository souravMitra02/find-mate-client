import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner32.jpg';
import banner3 from '../assets/bannerroom.jpg';

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[100vh]">
      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-5">
          Welcome to <span className="text-indigo-400">Roommate Finder</span>
        </h1>
        <p className="text-lg md:text-2xl font-light drop-shadow-md mb-8">
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
              className="w-full h-[80vh] md:h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Search Box */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl z-30 mx-4 justify-between">
        {/* Location Input */}
        <input
          type="text"
          placeholder="Location (e.g. Dhaka, Mirpur)"
          className="input input-bordered w-full md:w-1/4 focus:border-2 focus:border-blue-600 focus:outline-none rounded-full p-5"
        />

        {/* Budget Input */}
        <input
          type="number"
          placeholder="Max Budget (e.g. 8000)"
          className="input  w-full md:w-1/4 focus:border-2 focus:border-blue-600 focus:outline-none rounded-full p-5"
        />

        {/* Room Type Input */}
        <select
  className="w-full md:w-1/4 rounded-full py-2 border border-gray-300  px-3 focus:border-2 focus:border-blue-600 focus:outline-none"
  defaultValue=""
>
  <option value="" disabled>
    Room Type
  </option>
  <option value="single">Single</option>
  <option value="shared">Shared</option>
  <option value="any">Any</option>
</select>


        {/* Search Button */}
        <button className="btn btn-primary rounded-full w-full md:w-auto px-5">Search</button>
      </div>
    </div>
  );
};

export default Banner;
