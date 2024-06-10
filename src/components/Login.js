import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 mx-auto w-full rounded-sm bg-gray-700 bg-opacity-70"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 mx-auto w-full rounded-sm bg-gray-700 bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 mx-auto w-full rounded-sm bg-gray-700 bg-opacity-70"
        />
        <button className="p-4 my-4 mx-auto bg-red-600 rounded-md w-full font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"} Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
