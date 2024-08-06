import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 w-full flex items-center justify-between flex-wrap bg-gray-800 p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">CS</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm">
          <Link
            to={"/courses"}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-4"
          >
            Courses
          </Link>
          <Link
            to={"/dashboard"}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-4"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};
