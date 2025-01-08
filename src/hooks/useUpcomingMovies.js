import { useEffect } from "react";
import { options, UPCOMING_URL } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../slices/movieSlice";

export const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store)=>store.movie.upcoming);
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(UPCOMING_URL, options);
    const res = await data.json();
    dispatch(addUpcomingMovies(res.results));
  };

  useEffect(() => {
    !upcomingMovies && fetchingTmdbApi();
  }, []);
};
