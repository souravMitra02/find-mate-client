import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold mb-4">
          About <span className="text-indigo-600 dark:text-indigo-400">Roommate Finder</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Connecting people with their perfect living spaces and roommates easily and securely.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            To make finding a roommate and a comfortable home hassle-free, reliable, and affordable for everyone.
          </p>
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            To be the most trusted platform for connecting people with their ideal living situations globally.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
        <p className="max-w-4xl mx-auto text-center leading-relaxed text-gray-700 dark:text-gray-300">
          Roommate Finder is a dedicated platform that helps you find your perfect roommate and living space easily.
          We believe everyone deserves a safe and friendly home environment, and we strive to build a community that supports that vision.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-24">
        {[
          { value: 10000, label: "Happy Users" },
          { value: 5000, label: "Listings Available" },
          { value: 99, label: "Successful Matches", suffix: "%" },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="bg-indigo-100 dark:bg-indigo-900 rounded-3xl p-12 shadow-xl hover:scale-105 transform transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3">
              <CountUp start={0} end={stat.value} duration={3} separator="," />{stat.suffix || "+"}
            </h3>
            <p className="uppercase tracking-widest font-semibold text-lg text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: "Sourav Mitra",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/11.jpg",
              desc: "Passionate about building community-driven roommate finder services.",
            },
            {
              name: "Ayesha Rahman",
              role: "Product Manager",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              desc: "Ensuring smooth experience for our users across all platforms.",
            },
            {
              name: "Rafiq Ahmed",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/54.jpg",
              desc: "Developing and maintaining the platform with latest technologies.",
            },
          ].map((member, index) => (
            <div
              key={member.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-indigo-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20 max-w-4xl mx-auto text-center px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <blockquote className="italic text-gray-600 dark:text-gray-400 mb-6">
          “Roommate Finder made it so easy for me to find a roommate I could trust. Highly recommended!”
        </blockquote>
        <p className="font-semibold">— John Doe</p>
      </section>

      {/* Call to Action */}
      <section className="text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6">Ready to find your perfect roommate?</h2>
        <button
          onClick={() => navigate("/browse-listings")}
          className="btn btn-primary px-10 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition cursor-pointer"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
