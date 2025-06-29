import React, { use} from "react";
import banner2 from "../assets/banner32.jpg";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const { createUser, googleSignIn } = use(AuthContext);
const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UserData = Object.fromEntries(formData);

    const password = UserData.password;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (password.length < 6 || !hasUppercase || !hasLowercase) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.",
      });
    }

    createUser(UserData.email, UserData.password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: UserData.name,
          photoURL: UserData.photoURL || "https://i.ibb.co/2yvnJmL/user.png",
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: `Welcome, ${UserData.name}!`,
            });
            form.reset();
          })
          .catch((err) => {
            console.error("Profile update error:", err.message);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: err.message,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful",
          text: `Welcome, ${user.displayName || "User"}!`,
        });
        navigate('/')  
          
          
      })
      .catch((error) => {
        console.error("Google SignIn Error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="z-10 w-full max-w-3xl bg-opacity-90 rounded-lg shadow-lg p-6 md:p-10 border-2 border-white/90 m-10 bg-white/10">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Register to <span className="text-indigo-400">Find</span>
          <span className="text-orange-500">Mate</span>
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
  <div>
    <label className="label text-white">Name</label>
    <input
      type="text"
      name="name"
      className="input input-bordered w-full"
      placeholder="Your Name"
      required
    />
  </div>

  <div>
    <label className="label text-white">Email</label>
    <input
      type="email"
      name="email"
      className="input input-bordered w-full"
      placeholder="Your Email"
      required
    />
  </div>

  <div>
    <label className="label text-white">Password</label>
    <input
      type="password"
      name="password"
      className="input input-bordered w-full"
      placeholder="Password"
      required
    />
    <p className="text-xs text-gray-200 mt-1">
      * Must include at least one Uppercase and one Lowercase letter.
    </p>
  </div>

  <div>
    <label className="label text-white">Photo URL</label>
    <input
      type="text"
      name="photoURL"
      className="input input-bordered w-full"
      placeholder="Photo URL"
    />
  </div>

  <div>
    <label className="label text-white">Gender</label>
    <select className="select select-bordered w-full" name="gender">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label className="label text-white">Location</label>
    <input
      type="text"
      name="location"
      className="input input-bordered w-full"
      placeholder="e.g., Dhaka, Mirpur"
    />
  </div>
</div>


          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary bg-white"
              required
            />
            <p className="text-sm text-white">
              I agree to the{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Terms & Conditions
              </span>
              .
            </p>
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>

          <div className="divider text-white">or</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-gray-300 w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <path
                fill="#EA4335"
                d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
              <path
                fill="#34A853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#FBBC05"
                d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#4285F4"
                d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
            </svg>
            Register with Google
          </button>

          <p className="text-sm text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
