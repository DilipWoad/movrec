import { useEffect } from "react";
import { options, POPULAR_URL } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../slices/movieSlice";

export const usePopularMovies = () => {
  const popularMovies = useSelector((store)=>store.movie.popular)
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(POPULAR_URL, options);
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };

  useEffect(() => {
    !popularMovies && fetchingTmdbApi();
  }, []);
};
