import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://find-mate.netlify.app/featured")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching featured posts:", error));
  }, []);

  return (
    <section className="my-10 px-4 max-w-7xl mx-auto pt-10 lg:pt-20">
      <h2 className="text-4xl font-bold mb-10 text-center dark:text-white">
        Featured Roommates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 6).map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Location:</strong> {post.location}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Rent:</strong> ${post.rent}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Room Type:</strong> {post.roomType}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {post.description?.length > 100
                  ? post.description.slice(0, 100) + "..."
                  : post.description}
              </p>
            </div>
            <Link to={`/details/${post._id}`} className="self-start">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-5 py-2 rounded-xl shadow-md">
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
