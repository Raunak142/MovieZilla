import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { FormValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const checkValidation = () => {
    const message = FormValidate(
      !isSignin ? name.current?.value : null,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;

    if (!isSignin) {
      // Sign Up Logic Here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/188819693?v=4",
          })
            .then(() => {
              // Profile updated!
               const { uid, email, displayName,photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                         uid: uid,
                          email:email,
                          displayName: displayName,
                          photoURL:photoURL
                        })
                      );
               
              // ...
            })
            .catch((error) => {
              // An error occurred
             setErrorMessage(errorCode + " - " + errorMessage);
              // ...
            });

          console.log("User Signed Up: ", user);
          // ...
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic Here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User Signed In: ", user);
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

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
        onSubmit={(e) => e.preventDefault()}
        action=""
        className=" w-[25%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-15 py-10 rounded-xl flex flex-col gap-3"
      >
        <h1 className="text-3xl font-medium mb-2">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-3 py-2 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-3 py-2 bg-gray-700"
        />
        <p className="text-sm px-2 text-red-500">{errorMessage}</p>
        <button
          onClick={checkValidation}
          className="px-3 py-2 mt-2 bg-red-700 rounded-lg cursor-pointer"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer " onClick={toggleSignIn}>
          {isSignin
            ? "New to Netfilx? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
