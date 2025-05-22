import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="collapse collapse-arrow bg-base-200 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-xl font-semibold">
              How do I find a suitable roommate?
            </div>
            <div className="collapse-content text-base sm:text-lg text-gray-700 leading-relaxed">
              To find a suitable roommate, visit the "Browse Listings" page. You
              can filter listings based on location, rent, and preferences. Make
              sure to check post activity and message users who are recently
              active for better results.
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-arrow bg-base-200 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-xl font-semibold">
              Is using FindMate completely free?
            </div>
            <div className="collapse-content text-base sm:text-lg text-gray-700 leading-relaxed">
              Yes, FindMate is 100% free to use. You can register, post roommate
              requests, and interact with others without any subscription or
              hidden charges.
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-arrow bg-base-200 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-xl font-semibold">
              How do I create and publish a roommate listing?
            </div>
            <div className="collapse-content text-base sm:text-lg text-gray-700 leading-relaxed">
              After logging in, go to the "Add Post" page, fill out the required
              form with location, rent, and your preferences, and submit. Your
              post will be live immediately for others to see.
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-arrow bg-base-200 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-xl font-semibold">
              Can I edit or remove my listing later?
            </div>
            <div className="collapse-content text-base sm:text-lg text-gray-700 leading-relaxed">
              Yes. Navigate to "My Listings" to edit or delete any of your
              active posts at any time. You have full control over your
              listings.
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-arrow bg-base-200 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-xl font-semibold">
              Is my personal information safe on this platform?
            </div>
            <div className="collapse-content text-base sm:text-lg text-gray-700 leading-relaxed">
              We ensure your privacy. Only the information you choose to show
              will be visible. Your email or sensitive data is never publicly
              exposed.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
