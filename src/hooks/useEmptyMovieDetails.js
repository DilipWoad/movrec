import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyMovieDetails } from "../slices/movieInfoSlice";

export const useEmptyMovieDetails=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(emptyMovieDetails());
    },[])
}
