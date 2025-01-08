import { useEffect } from "react";
import { options, TOP_RATED_URL } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../slices/movieSlice";

export const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store)=>store.movie.topRated);
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(TOP_RATED_URL, options);
    const res = await data.json();
    dispatch(addTopRatedMovies(res.results));
  };

  useEffect(() => {
    !topRatedMovies && fetchingTmdbApi();
  }, []);
};
