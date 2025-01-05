import { signOut} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch, useSelector} from 'react-redux';
import { NETFLIX_LOGO } from "../utils/constant";
import { useHeaderAuthState } from "../hooks/useHeaderAuthState";
import { changeGeminiState } from "../slices/geminiSearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store)=>store.user);
  //TODO: create custom hook
  useHeaderAuthState();
  const handleLogout = () => {
    signOut(auth);
  };

  const handleGemini=()=>{
    dispatch(changeGeminiState());
  }
  
  return (
    <div className="absolute px-[54px] py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img
        className="w-48"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {auth.currentUser && (
        <div className="flex items-center">
          <button className="bg-blue-800 mx-3 py-1 px-2 rounded-md text-lg" onClick={handleGemini}>Gemini <span className="text-xl">✧</span></button>
          <img
            className="w-10 h-10"
            src={userData?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleLogout}
            className="bg-red-700 w-100  text-white px-2 py-1 rounded-md mx-3 text-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
