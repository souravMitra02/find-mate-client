// AddPost.jsx
import { use } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider";

const AddPost = () => {
  const { user } = use(AuthContext);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.userEmail = user?.email;
    data.userName = user?.displayName;

    const res = await fetch("http://localhost:3000/add-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.insertedId) {
      toast.success("Post added successfully!");
      form.reset();
    } else {
      toast.error("Failed to add post.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Add Roommate Post</h2>
      <form onSubmit={handleAddPost} className="space-y-4">

        <input name="title" placeholder="Title" required className="w-full border px-3 py-2 rounded" />
        <input name="location" placeholder="Location" required className="w-full border px-3 py-2 rounded" />
        <input name="rent" type="number" placeholder="Rent" required className="w-full border px-3 py-2 rounded" />
        <input name="roomType" placeholder="Room Type (Single/Shared)" required className="w-full border px-3 py-2 rounded" />
        <input name="lifestyle" placeholder="Lifestyle (Pets/Smoking/etc.)" className="w-full border px-3 py-2 rounded" />
        <textarea name="description" placeholder="Description" required className="w-full border px-3 py-2 rounded" />
        <input name="contactInfo" placeholder="Contact Info" required className="w-full border px-3 py-2 rounded" />
        
        <select name="availability" required className="w-full border px-3 py-2 rounded">
          <option value="">Select Availability</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <input readOnly value={user?.email || ""} className="w-full border bg-gray-100 px-3 py-2 rounded" />
        <input readOnly value={user?.displayName || ""} className="w-full border bg-gray-100 px-3 py-2 rounded" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddPost;
