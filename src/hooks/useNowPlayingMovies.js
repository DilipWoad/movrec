import { useEffect } from "react";
import { options, NOW_PLAYING_URL } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../slices/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store)=>store.movie.playingNow);
  const fetchingTmdbApi = async () => {
    const data = await fetch(NOW_PLAYING_URL, options);
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchingTmdbApi();
  }, []);
};
