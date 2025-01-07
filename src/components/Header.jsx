import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { useHeaderAuthState } from "../hooks/useHeaderAuthState";
import { changeGeminiState } from "../slices/geminiSearchSlice";
import { changeLanguage } from "../slices/languageSlice";
import logo from '../assets/images/MovrecLogo.png'

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store?.user);
  const geminiStatus = useSelector((store) => store?.gemini?.GeminiStatus);
  //TODO: create custom hook
  useHeaderAuthState();

  const handleLogout = () => {
    signOut(auth);
  };

  const handleGemini = () => {
    dispatch(changeGeminiState());
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    dispatch(changeLanguage(lang));
  };

  return (
    <div className="absolute px-[54px] py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img className="w-48" src={logo} alt="logo" />
      {auth.currentUser && (
        <div className="flex items-center">
          {geminiStatus && (
            <select
              className="py-1 text-lg rounded-sm"
              name="lang"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.name} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className={`bg-blue-800 mx-3 py-1 px-2 rounded-md text-lg ${
              geminiStatus && "bg-red-700 text-white"
            }`}
            onClick={handleGemini}
          >
            {geminiStatus ? "Home🏠︎" : "Gemini✧"}
          </button>
          <img className="w-10 h-10" src={userData?.photoURL} alt="user-icon" />
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
