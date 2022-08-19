import React from "react";
import logo from "../assets/images/mitan_bird.svg";
import medbird from "../assets/images/small.svg";
import mitan_logo from "../assets/images/mitan_logo.svg";
import MainCard from "./MainCard";

const MainDemo = () => {
  return (
    <div className="h-screen bg-wh">
      <div className="absolute right-0 top-3 ">
        <img src={logo} alt="big-bird" />
      </div>

      <div className="relative inset-0 flex justify-center items-center z-0 top-5">
        <img src={mitan_logo} alt="mitan-logo" />
      </div>

      <div className="relative inset-0 flex justify-center items-center top-10 bg-wh px-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-wh justify-center mt-10 ml-5 mr-5 flex">
              Sign In to your account here..{" "}
            </div>
            <div className="mb-6">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-900 mt-10 ml-2  "
              >
                Enter aadhar/
              </label>
              <input
                type="text"
                id="default-input"
                hint="Aadhar/mobile Number*"
                className="bg-gray-50 border border-gray-100 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Aadhar/Mobile Number*"
              />
            </div>

            <div className="mb-6">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-900 mt-5 ml-2  "
              >
                Enter 6 digit security PIN*/
              </label>
              <input
                type="text"
                id="default-input"
                hint="Aadhar/mobile Number*"
                className="bg-gray-50 border border-gray-100 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your PIN*"
              />
            </div>

            <p className="text-wh text-md ml-2"> Forgot Security PIN? </p>

            <button class="bg-wh hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full" >
  Sign In
</button>
          </div>
          <div className=" relative flex justify-center items-center pb-2">
          <p>Do not have an acoount? Sign Up</p>
          </div>


          {/* <div className=" relative flex justify-center items-center  w-full bottom-0">
          <p className="text-sm">By Signing in you are agreeing with our Terms and Conditions </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainDemo;
