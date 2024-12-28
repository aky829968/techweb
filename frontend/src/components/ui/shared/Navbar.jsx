import AdminContext from "@/context/AdminContext";
import axios from "axios";
import { Home, MailIcon, PhoneCall } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { admin, logout } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-red-500 justify-center flex flex-col items-center md:flex-row md:py-4 md:gap-4">
        <div className="flex gap-2">
          <MailIcon className="text-white" />
          <span className="text-lg text-white font-semibold">
            abc@gmail.com
          </span>
        </div>
        <div className="flex gap-2">
          <PhoneCall className="text-white" />
          <span className="text-lg text-white font-semibold">
            +91 1234567890
          </span>
        </div>
        <div className="flex gap-2">
          <Home className="text-white" />
          <span className="text-lg text-white font-semibold">
            Nighoa,Luckonw,226301
          </span>
        </div>
      </div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-6 sm:h-7" alt="Logo" />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                onClick={() => setIsOpen(!isOpen)}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                onClick={() => setIsOpen(!isOpen)}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(!isOpen)}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Contact
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(!isOpen)}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Courses
              </Link>
              {!admin.login ? (
                <Link
                  to="/adminlogin"
                  onClick={() => setIsOpen(!isOpen)}
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  Admin Login
                </Link>
              ) : (
                <h2
                  onClick={() => {
                    setIsOpen(!isOpen);
                    logout();
                    navigate("/");
                  }}
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  Logout
                </h2>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
