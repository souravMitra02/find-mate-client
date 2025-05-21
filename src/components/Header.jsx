import { NavLink } from "react-router";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          Browse Listings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-post"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          Add Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-listings"
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          My Listings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        {/* Left - Logo */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
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
           <h2> <span className="text-indigo-400">Find</span><span className="text-orange-500">Mate</span></h2>
          </NavLink>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right - Auth Buttons */}
        <div className="navbar-end gap-2">
          <NavLink to="/login" className="btn btn-sm btn-outline">
            Login
          </NavLink>
          <NavLink to="/register" className="btn btn-sm btn-primary text-white">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
