import { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/formValidation";
import { auth } from "../utils/Firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slices/userSlice.js";
import { AVATAR_LOGO, NETFLIX_BACKGROUND } from "../utils/constant.js";
import { AddErrorMessage } from "../slices/errorSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((store)=>store?.error?.errorMessage);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(!signUp) ;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

  const email = emailRef?.current?.value;
  const password = passwordRef?.current?.value;
  const fullName = fullNameRef?.current?.value;

  //   //check correct email & pass format
     const validAns = formValidation(email, password);

     dispatch(AddErrorMessage(validAns));

    //useHook start here
    if (signUp) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          // console.log(userData);
          const user = userData.user;
          updateProfile(user, {
            displayName: fullName,
            photoURL:AVATAR_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              dispatch(AddErrorMessage(error.message));
            });
        })
        .catch((error) => {
          console.log(error.message)
          // dispatch(AddErrorMessage(error.message));
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          const user = userData.user;
        })
        .catch((error) => {
          dispatch(AddErrorMessage(error.message));
        });
    } 
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className=""
          src={NETFLIX_BACKGROUND}
          alt="background"
        />
      </div>
      <form className="bg-black w-3/12 absolute mx-auto px-12 py-10 my-36 right-0 left-0 bg-opacity-85 rounded-md ">
        <h1 className="text-white text-2xl my-4 font-bold">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            ref={fullNameRef}
            className="p-2 my-2 w-full rounded-md "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="p-2 my-2 w-full rounded-md"
          type="text"
          placeholder="Email address"
          ref={emailRef}
        />
        <input
          className="p-2 my-2 w-full rounded-md"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {error !== null && (
          <p className="text-red-500 text-sm font-semibold">{error}</p>//Add Error Message
        )}
        <button
          className="bg-red-700 text-white w-full p-2 my-6 font-semibold rounded-md"
          onClick={handleFormSubmit}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-white text-sm">
          <span className="font-normal text-gray-500">
            {signUp ? "Already have an account?" : "New to Movrec?"}
          </span>
          <span
            className="font-semibold  hover:cursor-pointer hover:underline"
            onClick={handleSignUp}
          >
            {signUp ? " Sign In." : " Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
