import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger menu
import Logo from "../../assets/Logo-2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="company logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on mobile) */}
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 z-50`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 font-semibold">
            <li>
              <Link
                to="/customerService"
                className="hover:text-blue-600 transition"
              >
                Customer Service
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="hover:text-blue-600 transition"
              >
                Rooms
              </Link>
            </li>

            {/* Conditionally render Sign In if not on the /signIn page */}
            {location.pathname !== "/signIn" && (
              <li>
                <Link to="/signIn" className="hover:text-blue-600 transition">
                  Sign In
                </Link>
              </li>
            )}

            {location.pathname !== "/register" && (
              <li>
                <Link to="/register" className="hover:text-blue-600 transition">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
