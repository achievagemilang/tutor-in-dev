import React from "react";

const Footer = () => {
  return (
    <footer className="text-white body-font border-t-2 bg-pink-main">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-2xl">TUTOR-IN</span>
          </a>
          <p className="mt-2 text-m text-gray-500">
            Your favorite tutors at your service!{" "}
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              More Info
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  <span className="font-bold">Email: </span>
                  support@tutor.in
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  <span className="font-bold">Location: </span>
                  Jalan Menuju Surga, Kukusan, Depok, Indonesia
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 TUTOR-IN — PartyPencariPengalaman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
