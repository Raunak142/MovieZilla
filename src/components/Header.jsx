import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        dispatch(
          addUser({
           uid: uid,
            email:email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out\
        dispatch(removeUser());
        navigate("/");
        
        // ...
      }
    });
  }, []);
  return (
    <div
      className="w-screen bg-linear-to-b from-black to-transparent absolute px-5 py-3 flex items-center justify-between">
      <img
        className="h-12  cursor-pointer"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="LOGO"
      />
      {user && (
        <div className="flex items-center gap-4 ">
          <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
          <button
            onClick={handleClick}
            className="text-white bg-red-700 px-3 py-1 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
      {/* {user &&<button
          onClick={handleClick}
          className="text-white bg-red-700 px-3 py-1 rounded-lg"
        >
          Sign Out
        </button>} */}
    </div>
  );
};

export default Header;
