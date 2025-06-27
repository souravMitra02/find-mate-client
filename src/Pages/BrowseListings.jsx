import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const BrowseListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const [sortOrder, setSortOrder] = useState("asc");
 
  const [filterRoomType, setFilterRoomType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://roommate-finder-server-pi.vercel.app/listings")
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

  
  useEffect(() => {
    let updatedListings = [...listings];

    if (filterRoomType) {
      updatedListings = updatedListings.filter(
        (item) => item.roomType.toLowerCase() === filterRoomType.toLowerCase()
      );
    }

    
    updatedListings.sort((a, b) => {
      if (sortOrder === "asc") return a.rent - b.rent;
      else return b.rent - a.rent;
    });

    setFilteredListings(updatedListings);
  }, [listings, sortOrder, filterRoomType]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Browse Listings</h2>

      {/* Sorting & Filtering Controls */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <select
          className="input input-bordered max-w-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort by Rent: Low to High</option>
          <option value="desc">Sort by Rent: High to Low</option>
        </select>

        <select
          className="input input-bordered max-w-xs"
          value={filterRoomType}
          onChange={(e) => setFilterRoomType(e.target.value)}
        >
          <option value="">Filter by Room Type</option>
          <option value="single">Single</option>
          <option value="shared">Shared</option>
          <option value="any">Any</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div
              key={listing._id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Location: <span className="font-medium">{listing.location}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Rent: <span className="font-medium">${listing.rent}</span>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Room Type: <span className="font-medium">{listing.roomType}</span>
              </p>
              <button
                onClick={() => navigate(`/details/${listing._id}`)}
                className="btn btn-primary mt-auto"
              >
                See More
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseListings;
