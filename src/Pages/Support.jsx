import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuestionCircle, FaUserShield, FaLifeRing } from "react-icons/fa";
import { useNavigate } from "react-router";

const Support = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-400">
          Need Help?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          We're here to support you with any questions or concerns you may have. Just choose the type of help you need.
        </p>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {/* FAQs */}
        <div
          className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 p-8 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition"
          data-aos="zoom-in"
        >
          <FaQuestionCircle className="text-5xl mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">FAQs</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Find instant answers to common questions about using Roommate Finder.
          </p>
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => navigate("/faqs")}
          >
            Browse FAQs
          </button>
        </div>

        {/* Account & Security */}
        <div
          className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 p-8 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <FaUserShield className="text-5xl mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Account & Security</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Help with logging in, managing your data, or securing your profile.
          </p>
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => navigate("/account-help")}
          >
            Account Help
          </button>
        </div>

        {/* Contact Support */}
        <div
          className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 p-8 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaLifeRing className="text-5xl mx-auto text-indigo-600 dark:text-indigo-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Contact Support</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Still stuck? Contact our friendly support team for personalized help.
          </p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate("/contact")}
          >
            Get Support
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
          Still confused?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
          Don’t worry! Click below to talk with our support team directly or drop us a message.
        </p>
        <button
          className="btn btn-primary px-10 py-3 text-lg font-semibold shadow-md hover:shadow-xl transition"
          onClick={() => navigate("/contact")}
        >
          Chat With Us
        </button>
      </div>
    </div>
  );
};

export default Support;
