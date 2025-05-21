import React from "react";
import banner2 from "../assets/banner32.jpg"

const SignUp = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex justify-center items-center px-4 "
      style={{ backgroundImage: `url(${banner2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* SignUp Form */}
      <div className="z-10 w-full max-w-3xl bg-opacity-90 rounded-lg shadow-lg p-6 md:p-10 border-2 border-white/90  m-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Register to <span className="text-indigo-400">Find</span><span className="text-orange-500">Mate</span></h2>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />
            </div>

            <div>
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="input input-bordered w-full"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-full"
                placeholder="Photo URL "
              />
            </div>

            <div>
              <label className="label">Gender</label>
              <select className="select select-bordered w-full" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="e.g., Dhaka, Mirpur"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 mt-2">
           <input type="checkbox"  className="checkbox checkbox-primary  bg-white" required />

            <p className="text-sm text-white">
              I agree to the{" "}
              <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span> and{" "}
              <span className="text-blue-500 underline cursor-pointer">Terms & Conditions</span>.
            </p>
          </div>

          <button type="submit" className="btn btn-neutral w-full ">
            Register
          </button>

          <div className="divider  text-white">or</div>

          <button className="btn bg-white text-black border-gray-300 w-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#FBBC05" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#4285F4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
            </svg>
            Register with Google
          </button>

          <p className="text-sm text-center  text-white">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
