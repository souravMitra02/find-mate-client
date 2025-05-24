import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BrowseListings = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Browse Listings</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
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
          {listings.map((listing) => (
            <tr key={listing._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{listing.title}</td>
              <td className="border border-gray-300 p-2">{listing.location}</td>
              <td className="border border-gray-300 p-2">{listing.rent}</td>
              <td className="border border-gray-300 p-2">{listing.roomType}</td>
              <td className="border border-gray-300 p-2">{listing.availability}</td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => navigate(`/listing-details/${listing._id}`)}
                  className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                >
                  See More
                </button>
              </td>
            </tr>
          ))}
          {listings.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No listings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseListings;
