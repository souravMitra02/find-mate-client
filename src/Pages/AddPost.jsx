import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const AddPost = () => {
  const { user } = use(AuthContext);

  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());

    newListing.userEmail = user?.email || "";
    newListing.userName = user?.displayName || "";

    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Listing Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl bg-white dark:bg-white/10 text-black dark:text-white rounded-lg shadow-lg p-6 md:p-10 border-2 border-gray-200 dark:border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-black dark:text-white">Add New </span>
          <span className="text-indigo-400">Roommate</span>
          <span className="text-orange-500"> Post</span>
        </h2>

        <form
          onSubmit={handleAddPost}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="title"
            required
            placeholder="Title (e.g., Looking for roommate in NYC)"
            className="input col-span-1 md:col-span-2 input-bordered w-full bg-white/90 text-black placeholder-gray-700"
          />

          <input
            type="text"
            name="location"
            required
            placeholder="Location"
            className="input input-bordered w-full bg-white/90 text-black placeholder-gray-700"
          />

          <input
            type="number"
            name="rent"
            required
            placeholder="Rent Amount"
            className="input input-bordered w-full bg-white/90 text-black placeholder-gray-700"
          />

          <select
            name="roomType"
            required
            className="select select-bordered w-full bg-white/90 text-black"
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
          </select>

          <input
            type="text"
            name="lifestyle"
            required
            placeholder="Lifestyle Preferences (e.g. No smoking, Pet friendly)"
            className="input input-bordered w-full bg-white/90 text-black placeholder-gray-700"
          />

          <input
            type="text"
            name="contact"
            required
            placeholder="Contact Info"
            className="input input-bordered w-full bg-white/90 text-black placeholder-gray-700"
          />

          <select
            name="availability"
            required
            className="select select-bordered w-full bg-white/90 text-black"
          >
            <option value="available">Available</option>
            <option value="not available">Not Available</option>
          </select>

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-300 text-black"
            placeholder="Your Email"
          />

          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-300 text-black"
            placeholder="Your Name"
          />

          <div className="md:col-span-2">
            <textarea
              name="description"
              required
              placeholder="Description"
              className="textarea textarea-bordered w-full h-32 bg-white/90 text-black placeholder-gray-700"
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn btn-neutral w-full">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;