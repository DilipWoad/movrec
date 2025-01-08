import { useEffect } from "react";
import { options } from "../utils/TMDBurls/tmdbUrls";
import { addMovieTrailer } from "../slices/movieSlice";
import {useDispatch,useSelector} from 'react-redux';

export const useMovieTrailer=(movieId)=>{
    const trailer = useSelector(store=>store.movie?.trailerVideo)
    const dispatch = useDispatch();
    const backgroundVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const res = await fetch(url, options);
    const data = await res.json();
    const allVideo = data.results;

    const movieTrailer = allVideo.filter(
      (movieClip) => movieClip.type === "Trailer"
    );
    const movieVid = movieTrailer.length ? movieTrailer[0] : allVideo[0];

    dispatch(addMovieTrailer(movieVid));
  };
  useEffect(() => {
    !trailer && backgroundVideo();
  }, []);
}