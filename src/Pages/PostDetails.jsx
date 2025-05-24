import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const PostDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
    const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    fetch(`https://roommate-finder-server-pi.vercel.app/listings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLikeCount(data.likeCount || 0);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Swal.fire("Error", "Failed to load post details", "error");
      });
  }, [id]);

  const handleLike = () => {
    if (!user) {
      Swal.fire("Oops!", "You need to login to like posts.", "warning");
      return;
    }
    if (user.email === listing.email) {
      Swal.fire("Sorry!", "You can't like your own post.", "error");
      return;
    }

    fetch(`https://roommate-finder-server-pi.vercel.app/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likeCount: likeCount + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLikeCount(likeCount + 1);
          setShowContact(true);
          Swal.fire("Liked!", "Thanks for your interest.", "success");
        } else {
          Swal.fire("Info", "Like was not updated.", "info");
        }
      })
      .catch(() => Swal.fire("Error", "Something went wrong.", "error"));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!listing) {
    return <div className="text-center mt-10 text-red-600 font-semibold">No data found!!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-10">
      <p className="mb-4 text-center text-lg font-semibold text-indigo-700">
        {likeCount} {likeCount === 1 ? "person is" : "people are"} interested in
      </p>

      <h2 className="text-3xl font-extrabold mb-6 text-center sm:text-left text-gray-900">{listing.title}</h2>

      <div className="space-y-4 text-gray-700 text-sm sm:text-base">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <span className="font-semibold w-32">Location:</span>
          <span>{listing.location}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <span className="font-semibold w-32">Rent:</span>
          <span>${listing.rent}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <span className="font-semibold w-32">Room Type:</span>
          <span>{listing.roomType}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <span className="font-semibold w-32">Availability:</span>
          <span>{listing.availability}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <span className="font-semibold w-32">Posted By:</span>
          <span>{listing.name} ({listing.email})</span>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-left">
        <button
          onClick={handleLike}
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-semibold"
        >
          Like
        </button>
      </div>

      {showContact && (
        <p className="mt-6 text-center sm:text-left text-lg text-gray-900">
          <span className="font-semibold">Contact Number:</span> {listing.contact || "N/A"}
              </p>
      )}
    </div>
  );
};

export default PostDetails;
