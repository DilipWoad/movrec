import { useEffect } from "react";
import { options, TMDB_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slices/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchingTmdbApi = async () => {
    const data = await fetch(TMDB_URL, options);
    const res = await data.json();
    console.log(res);
    dispatch(addNowPlayingMovies(res.results));
  };

  useEffect(() => {
    fetchingTmdbApi();
  }, []);
};
