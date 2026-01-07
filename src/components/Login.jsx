import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignin);
  };

  return (
    <div className="relative w-full">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_small.jpg"
          alt="BgImg"
          className="w-full h-screen object-cover"
        />
      </div>
      <form
        action=""
        className=" w-[25%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-15 py-10 rounded-xl flex flex-col gap-3"
      >
        <h1 className="text-3xl font-medium mb-2">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
          type="text"
          placeholder="Full Name"
          className="px-3 py-2 bg-gray-700"
        />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="px-3 py-2 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 bg-gray-700"
        />
        <button className="px-3 py-2 mt-2 bg-red-700 rounded-lg cursor-pointer">
         {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer " onClick={toggleSignIn}>
          {isSignin ? "New to Netfilx? Sign Up Now" : "Already have an account? Sign In"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
