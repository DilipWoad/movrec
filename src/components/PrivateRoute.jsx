import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../slices/authenticateSlice";
import { Navigate } from "react-router";

const PrivateRoute=({children})=>{
    const dispatch = useDispatch();
    const userAuth =  useSelector((store)=>store?.auth?.isAuthenticated);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                //if user presnt then make authenticate as true
                dispatch(changeAuth(true));
            }else{
                dispatch(changeAuth(false));
            }
        })
        return ()=> unsubscribe(); //to unmount the onAuthStateChanged from the header
    },[])

    //checking before UseEffect
    if(userAuth === null){
        return <div className="flex w-screen h-screen justify-center items-center"><div className=" flex justify-center items-center w-64 h-48 rounded-lg bg-black bg-opacity-80 text-5xl text-white">Loading ....</div></div>
    }

    return userAuth  ? children : <Navigate to={'/'} />
}

export default PrivateRoute;