import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/my-listings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This post will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/listings/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              setListings(listings.filter((post) => post._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">My Listings</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 whitespace-nowrap">Title</th>
              <th className="border p-2 whitespace-nowrap">Location</th>
              <th className="border p-2 whitespace-nowrap">Rent</th>
              <th className="border p-2 whitespace-nowrap">Room Type</th>
              <th className="border p-2 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4">
                  No listings found.
                </td>
              </tr>
            ) : (
              listings.map((listing) => (
                <tr key={listing._id} className="hover:bg-gray-50">
                  <td className="border p-2 whitespace-nowrap">{listing.title}</td>
                  <td className="border p-2 whitespace-nowrap">{listing.location}</td>
                  <td className="border p-2 whitespace-nowrap">${listing.rent}</td>
                  <td className="border p-2 whitespace-nowrap">{listing.roomType}</td>
                  <td className="border p-2 whitespace-nowrap">
                    <button
                      onClick={() => navigate(`/update/${listing._id}`)}
                      className="bg-yellow-400 px-3 py-1 rounded mr-2 hover:bg-yellow-500 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
