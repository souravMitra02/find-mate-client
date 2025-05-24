import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const BrowseListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);  
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Browse Listings
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Location</th>
              <th className="border border-gray-300 p-2">Rent</th>
              <th className="border border-gray-300 p-2">Room Type</th>
              <th className="border border-gray-300 p-2">Availability</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.length > 0 ? (
              listings.map((listing) => (
                <tr key={listing._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{listing.title}</td>
                  <td className="border border-gray-300 p-2">{listing.location}</td>
                  <td className="border border-gray-300 p-2">{listing.rent}</td>
                  <td className="border border-gray-300 p-2">{listing.roomType}</td>
                  <td className="border border-gray-300 p-2">{listing.availability}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      onClick={() => navigate(`/details/${listing._id}`)}
                      className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 text-xs sm:text-sm"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListings;
