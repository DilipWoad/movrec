import { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/formValidation";
import { auth } from "../utils/firebase.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);
  const [errorMessage,setErrorMessage] = useState(null);

  

  const handleSignUp = () => {
    setSignUp(signUp ? false : true);
  };

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    const validAns = formValidation(email,password);
    // console.log(validAns);

    setErrorMessage(validAns);

    if(signUp){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth,email,password)
      .then((userData)=>{
        console.log(userData);
        const user = userData.user
        console.log(user)
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+errorMessage)
      })
    }else{
      //Sign In logic
      signInWithEmailAndPassword(auth,email,password)
      .then((userData)=>{
        const user = userData.user;
        console.log(user);
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      })
    }

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"
          alt="background"
        />
      </div>
      <form className="bg-black w-3/12 absolute mx-auto px-12 py-10 my-36 right-0 left-0 bg-opacity-85 rounded-md ">
        <h1 className="text-white text-2xl my-4 font-bold">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {/* <input
          className={`p-2 my-2 w-full rounded-md ${signUp ? 'block': 'hidden'}`}
          type="text"
          placeholder="Full Name"
        /> */}
        {signUp && (<input
          className='p-2 my-2 w-full rounded-md '
          type="text"
          placeholder="Full Name"
        />)}
        
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
        {errorMessage!==null && <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>}
        <button className="bg-red-700 text-white w-full p-2 my-6 font-semibold rounded-md" onClick={handleFormSubmit}>
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-white text-sm">
          <span className="font-normal text-gray-500">{signUp ?"Already have an account?" : "New to Netflix?" }</span>
          <span
            className="font-semibold  hover:cursor-pointer hover:underline"
            onClick={handleSignUp}
          >
            {signUp ? " Sign In." : " Sign up now."}
          </span>
        </p>
        {/* {signUp ?<p className="text-white text-sm"><span className="font-normal text-gray-500">Already have an account?</span> <span className="font-semibold  hover:cursor-pointer hover:underline" onClick={handleSignUp}>Sign In.</span></p> : <p className="text-white text-sm"><span className="font-normal text-gray-500">New to Netflix?</span> <span className="font-semibold  hover:cursor-pointer hover:underline" onClick={handleSignUp}>Sign up now.</span></p>} */}
      </form>
    </div>
  );
};

export default Login;
