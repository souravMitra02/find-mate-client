import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Have a question, feedback, or just want to say hello? We're happy to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-20">
        {/* Contact Info */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-indigo-600" />
            <span className="text-lg">+880 1234 567 890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-indigo-600" />
            <span className="text-lg">support@roommatefinder.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-indigo-600" />
            <span className="text-lg">Dhaka, Bangladesh</span>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="hover:text-indigo-500 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-indigo-500 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-indigo-500 transition"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for contacting us!");
            e.target.reset();
          }}
          className="space-y-6"
          data-aos="fade-left"
        >
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg border dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg border dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div data-aos="fade-up" className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 md:h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
