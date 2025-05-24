import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching featured posts:", error));
  }, []);

  return (
    <div className="my-10 px-4 max-w-7xl mx-auto pt-10 lg:pt-20">
      <h2 className="text-4xl  font-bold mb-6 text-center "> Featured Roommates</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="border rounded-xl p-4 shadow-md bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Rent:</strong> ${post.rent}</p>
            <p><strong>Room Type:</strong> {post.roomType}</p>
            <p className="mb-2">{post.description?.slice(0, 60)}...</p>
            <Link to={`/details/${post._id}`}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;