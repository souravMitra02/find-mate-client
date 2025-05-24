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
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Roommate Post</h2>
      <form onSubmit={handleAddPost} className="space-y-4">

        <input
          type="text"
          name="title"
          required
          placeholder="Title (e.g., Looking for roommate in NYC)"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="location"
          required
          placeholder="Location"
          className="input input-bordered w-full"
        />

        <input
          type="number"
          name="rent"
          required
          placeholder="Rent Amount"
          className="input input-bordered w-full"
        />

        <select
          name="roomType"
          required
          className="select select-bordered w-full"
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
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          required
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />

        <input
          type="text"
          name="contact"
          required
          placeholder="Contact Info (Phone/Email)"
          className="input input-bordered w-full"
        />

        <select
          name="availability"
          required
          className="select select-bordered w-full"
        >
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>

        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100"
          placeholder="Your Email"
        />
        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100"
          placeholder="Your Name"
        />

        <button type="submit" className="btn btn-primary w-full">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
