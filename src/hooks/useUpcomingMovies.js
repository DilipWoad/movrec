import { useEffect } from "react";
import { options, UPCOMING_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../slices/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(UPCOMING_URL, options);
    const res = await data.json();
    dispatch(addUpcomingMovies(res.results));
  };

  useEffect(() => {
    fetchingTmdbApi();
  }, []);
};
