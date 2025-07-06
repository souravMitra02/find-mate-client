import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner32.jpg';
import banner3 from '../assets/bannerroom.jpg';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] mb-16">
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
        <button
          onClick={() => navigate("/browse-listings")}
          className="btn btn-primary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
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
    </div>
  );
};

export default Banner;
