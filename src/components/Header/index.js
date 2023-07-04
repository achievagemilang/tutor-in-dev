import React from "react";
import { Link } from "react-router-dom";
import icLogo from "../../assets/ic_logo.png";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/products",
  },
  {
    name: "Livestream",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={icLogo} alt="React Image" width={50} height={100} />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => {
            return (
              <Link to={navigation.path} className="mr-5 hover:text-gray-900">
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <div class="flex space-x-4">
          <Link
            to={"/login"}
            className="bg-pink-main inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className=" bg-pink-main inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
