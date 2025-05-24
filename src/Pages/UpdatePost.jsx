import React, { useEffect, useState, use } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";

const UpdatePost = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  // Fetch the listing details by ID
  useEffect(() => {
    fetch(`https://roommate-finder-server-pi.vercel.app/listings/${id}`)
      .then(res => res.json())
      .then(data => setListing(data))
      .catch(err => console.error( err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`https://roommate-finder-server-pi.vercel.app/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Post updated successfully!", "success");
          navigate("/my-listings");
        } else {
          Swal.fire("No Change", "Nothing was updated", "info");
        }
      })
      .catch(() => Swal.fire("Error", "Something went wrong", "error"));
  };

  
  if (!listing) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Update Roommate Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={listing.title}
          className="w-full border p-2"
          required
        />
        <input
          name="location"
          defaultValue={listing.location}
          className="w-full border p-2"
          required
        />
        <input
          name="rent"
          defaultValue={listing.rent}
          className="w-full border p-2"
          required
        />
        <input
          name="roomType"
          defaultValue={listing.roomType}
          className="w-full border p-2"
          required
        />
        <input
          name="availability"
          defaultValue={listing.availability}
          className="w-full border p-2"
          required
        />
        <input
          name="name"
          value={user.displayName}
          readOnly
          className="w-full border p-2 bg-gray-100"
        />
        <input
          name="email"
          value={user.email}
          readOnly
          className="w-full border p-2 bg-gray-100"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
