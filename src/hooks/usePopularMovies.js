import { useEffect } from "react";
import { options, POPULAR_URL } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../slices/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(POPULAR_URL, options);
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };

  useEffect(() => {
    fetchingTmdbApi();
  }, []);
};
