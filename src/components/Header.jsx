import { signOut} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useSelector} from 'react-redux';
import { NETFLIX_LOGO } from "../utils/constant";
import { useHeaderAuthState } from "../hooks/useHeaderAuthState";

const Header = () => {
  const userData = useSelector((store)=>store.user);
  //TODO: create custom hook
  useHeaderAuthState();
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
            src={userData?.photoURL}
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
