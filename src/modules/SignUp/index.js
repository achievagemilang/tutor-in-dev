import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  function changeColor(id) {
    if (id == 1) {
      document.getElementById("btn1").style.backgroundColor = "#df8390";
      document.getElementById("btn2").style.backgroundColor = "#FFFFFF";
    } else {
      document.getElementById("btn2").style.backgroundColor = "#df8390";
      document.getElementById("btn1").style.backgroundColor = "#FFFFFF";
    }
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-purple-700 uppercase">
          Join the pride!
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white font-bold">Role</div>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button
              onClick={() => changeColor(1)}
              id="btn1"
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <figure>
                <img
                  className="object-contain h-24 w-48"
                  src="https://placekitten.com/600"
                  alt="tutoree"
                ></img>
                <figcaption>Tutoree</figcaption>
              </figure>
            </button>
            <button
              onClick={() => changeColor(2)}
              id="btn2"
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <figure>
                <img
                  className="object-contain h-24 w-48"
                  src="https://placekitten.com/600"
                  alt="tutor"
                ></img>
                <figcaption>Tutor</figcaption>
              </figure>
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-pink-main w-1/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-pink-main hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
