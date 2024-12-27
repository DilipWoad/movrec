import { useEffect } from "react";
import { options, TOP_RATED_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../slices/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(TOP_RATED_URL, options);
    const res = await data.json();
    dispatch(addTopRatedMovies(res.results));
  };

  useEffect(() => {
    fetchingTmdbApi();
  }, []);
};
