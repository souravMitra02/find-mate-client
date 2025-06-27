import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://roommate-finder-server-pi.vercel.app/featured")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching featured posts:", error));
  }, []);

  return (
    <section className="my-10 px-4 max-w-7xl mx-auto pt-10 lg:pt-20">
      <h2 className="text-4xl font-bold mb-10 text-center dark:text-white">
        Featured Roommates
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.slice(0, 8).map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-4 flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              <strong>Location:</strong> {post.location}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              <strong>Rent:</strong> {post.rent} Taka
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Type:</strong> {post.roomType}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {post.description?.length > 100
                ? post.description.slice(0, 100) + "..."
                : post.description}
            </p>

            <Link to={`/details/${post._id}`} className="mt-auto">
              <button className="btn btn-primary w-full text-white">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
