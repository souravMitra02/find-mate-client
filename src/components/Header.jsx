import { use } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          text: error.message,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Browse Listings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Support
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-post"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-listings"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              My Listings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="shadow-sm bg-[#F2F7F8] sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        {/* Left - Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
         <NavLink to="/" className="text-2xl font-bold ml-2">
  <h2 className="flex items-center gap-1">
    <span className="text-indigo-400">Find</span>
    <span className="text-orange-500">Mate</span>
  </h2>
</NavLink>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right - Auth Section + Theme Toggle */}
        <div className="navbar-end gap-3 items-center">
          <ThemeToggle />

          {!user ? (
            <>
              <NavLink to="/login" className="btn btn-sm btn-outline">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-sm btn-primary text-white">
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative group">
              <img
                src={user?.photoURL || ""}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
              />
              {/* Hover dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <p className="text-sm font-semibold text-gray-700 mb-2 text-center">
                  {user?.displayName || "User"}
                </p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-error w-full text-white"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
