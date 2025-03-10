import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../utils/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../../slices/authenticateSlice";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const userAuth = useSelector((store) => store?.auth?.isAuthenticated);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  //checking before UseEffect
  if (!authChecked) {
    return (
      <div className="flex w-screen h-screen justify-center items-center p-4 bg-gray-900">
        <div className="flex flex-col justify-center items-center w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 rounded-lg bg-black bg-opacity-80 text-white shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75 mb-4"></div>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return userAuth ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
