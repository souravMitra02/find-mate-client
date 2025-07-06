import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const Support = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const leftItems = [
    {
      title: "Getting Started",
      desc: "Step-by-step guide on registration, profile setup, posting listings, and filtering roommates.",
    },
    {
      title: "FAQs",
      desc: "Answers to common questions about posting, account roles, safety, and policies.",
    },
    {
      title: "Resources & Tutorials",
      desc: "Helpful video guides and articles to improve your experience and success.",
    },
  ];

  const rightItems = [
    {
      title: "Account & Security",
      desc: "Learn how to secure your account, update profile, reset password, and manage privacy.",
    },
    {
      title: "Community Tips & Safety",
      desc: "Best practices to avoid scams, communicate safely, and build trust with roommates.",
    },
    {
      title: "Contact Support",
      desc: "Our team is ready 24/7 to help with technical issues, troubleshooting, and feedback.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-24" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6">
          Support Center
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Explore important topics to help you navigate Roommate Finder easily.  
          If you need further assistance, our support team is always ready to help.
        </p>
      </div>

      {/* Tree structure with vertical line */}
      <div className="relative flex flex-col md:flex-row max-w-5xl mx-auto">
        {/* Vertical center line - hidden on mobile */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[3px] bg-indigo-300 dark:bg-indigo-700 -translate-x-1/2 rounded"
          style={{ maxHeight: "calc(3 * 9rem + 2 * 3rem)" }} // height for 3 cards and gaps
        ></div>

        {/* Left side cards */}
        <div className="w-full md:w-1/2 space-y-12 pr-0 md:pr-12">
          {leftItems.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-right"
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-200 dark:border-indigo-700"
              style={{ marginTop: idx === 0 ? "0" : "3rem" }}
            >
              {/* Dot */}
              <div
                className="absolute top-12 -right-[26px] w-6 h-6 bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900 rounded-full"
                style={{ boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)" }}
              ></div>
              {/* Connector line */}
              <div
                className="hidden md:block absolute top-[36px] right-[-27px] h-[4.5rem] border-r-2 border-indigo-300 dark:border-indigo-700"
              ></div>

              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right side cards */}
        <div className="w-full md:w-1/2 space-y-12 pl-0 md:pl-12 mt-16 md:mt-0">
          {rightItems.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-left"
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-200 dark:border-indigo-700 text-right"
              style={{ marginTop: idx === 0 ? "0" : "3rem" }}
            >
              {/* Dot */}
              <div
                className="absolute top-12 -left-[26px] w-6 h-6 bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-900 rounded-full"
                style={{ boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)" }}
              ></div>
              {/* Connector line */}
              <div
                className="hidden md:block absolute top-[36px] left-[-27px] h-[4.5rem] border-l-2 border-indigo-300 dark:border-indigo-700"
              ></div>

              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-28" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-400">
          Need Personal Assistance?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our support team is available 24/7 to answer your questions and resolve any issues you may have.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="btn btn-primary px-14 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition"
        >
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default Support;
