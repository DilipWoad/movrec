import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from 'react-router';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch,useSelector } from "react-redux";
import { addUser, removeUser } from "../slices/userSlice";

const Body=()=>{
    const bodyRoutes = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid,email,displayName,photoURL} = user;
              // User is signed In
              dispatch(addUser({uid,email,displayName,photoURL}))
              
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    },[])

    return(
        <div>
            <RouterProvider router={bodyRoutes}>
            </RouterProvider>
        </div>
    )
}

export default Body;