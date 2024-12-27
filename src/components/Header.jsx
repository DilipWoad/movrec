import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { addUser,removeUser } from "../slices/userSlice";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  //TODO: create custom hook
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          // User is signed In
          dispatch(addUser({uid,email,displayName,photoURL}))
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')
        }
    });

    //Unsubscribe when component unmount
    return ()=> unsubscribe();
  },[])

  const userData = useSelector((store)=>store.user);
  const handleLogout = () => {
    signOut(auth);
  };
  
  return (
    <div className="absolute px-[54px] py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img
        className="w-48"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {auth.currentUser && (
        <div className="flex items-center">
          <img
            className="w-10 h-10"
            src={userData.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleLogout}
            className="bg-red-700 w-100 h-10 text-white ml-3 px-2 py-1 rounded-sm mx-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
