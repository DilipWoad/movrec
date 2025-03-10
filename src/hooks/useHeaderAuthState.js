import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase/firebase";
import { removeUser, addUser } from "../slices/userSlice";

const PROTECTED_ROUTES = ["/browse", "/movie", "/person"];
export const useHeaderAuthState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // User is signed In
        dispatch(addUser({ uid, email, displayName, photoURL }));

        const isOnProtectedRoute = PROTECTED_ROUTES.some((route) =>
          location.pathname.startsWith(route)
        );
        if (!isOnProtectedRoute) {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    //Unsubscribe when component unmount
    return () => unsubscribe();
  }, [dispatch, location]);
};
