import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const UpdatePost = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Post updated successfully!", "success");
          navigate("/my-listings");
        } else {
          Swal.fire("No Change", "Nothing was updated", "info");
        }
      })
      .catch(() => Swal.fire("Error", "Something went wrong", "error"));
  };

  if (!listing)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Update Roommate Post
      </h2>
      <form
        onSubmit={handleUpdate}
        className="space-y-6 bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl"
      >
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1 dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={listing.title}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block font-medium mb-1 dark:text-white">
            Location
          </label>
          <input
            type="text"
            name="location"
            defaultValue={listing.location}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Rent */}
        <div>
          <label htmlFor="rent" className="block font-medium mb-1 dark:text-white">
            Rent (৳)
          </label>
          <input
            type="number"
            name="rent"
            defaultValue={listing.rent}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Room Type */}
        <div>
          <label htmlFor="roomType" className="block font-medium mb-1 dark:text-white">
            Room Type
          </label>
          <input
            type="text"
            name="roomType"
            defaultValue={listing.roomType}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" className="block font-medium mb-1 dark:text-white">
            Availability
          </label>
          <input
            type="text"
            name="availability"
            defaultValue={listing.availability}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1 dark:text-white">Your Name</label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1 dark:text-white">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-white"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;