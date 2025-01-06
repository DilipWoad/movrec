import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, addUser } from "../slices/userSlice";

export const useHeaderAuthState=()=>{
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
}