import { signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../../utils/constant";
import { useHeaderAuthState } from "../../hooks/useHeaderAuthState";
import { changeGeminiState } from "../../slices/geminiSearchSlice";
import { changeLanguage } from "../../slices/languageSlice";
import logo from '../../assets/images/MovrecLogoCopy.png'
import { Link } from "react-router";

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
    <div className="bg-black relative  md:absolute px-[54px] py-2 md:bg-gradient-to-b md:from-black z-50 w-full flex flex-col md:flex-row items-center md:justify-between">
      <Link to={'/browse'}><img className="w-48 mb-5" src={logo} alt="logo" /></Link>
      {auth.currentUser && (
        <div className="flex w-full md:items-center justify-between  md:w-[28%]">
          {geminiStatus && (
            <select
              className="py-1 text-sm md:text-lg rounded-sm"
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
          <div className="md:flex md:items-center md:justify-end flex  w-full justify-between">
          <button
            className={`bg-blue-800 md:mx-3 py-1 px-2 rounded-md text-sm md:text-lg ${
              geminiStatus && "bg-red-700 text-white"
            }`}
            onClick={handleGemini}
          >
            {geminiStatus ? <Link to={'/browse'}>Home🏠︎</Link> :<Link>Gemini✧</Link>}
          </button>
          <img className="w-10 h-10 hidden md:block" src={userData?.photoURL} alt="user-icon" />
          <button
            onClick={handleLogout}
            className="bg-red-700 w-100  text-white px-2 py-1 rounded-md md:mx-3 text-sm md:text-lg"
          >
            Sign Out
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
