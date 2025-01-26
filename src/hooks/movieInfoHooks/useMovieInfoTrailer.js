import { useEffect } from "react";
import { options } from "../../utils/TMDBurls/tmdbUrls";
import {useDispatch,useSelector} from 'react-redux';
import { addTrailerVid } from "../../slices/movieInfoSlice";

export const useMovieInfoTrailer=(movieId)=>{
    const trailer = useSelector(store=>store.movieInfo?.trailerVideo)
    const dispatch = useDispatch();
    const backgroundVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const res = await fetch(url, options);
    const data = await res.json();
    const allVideo = data.results;

    const movieTrailer =allVideo.filter(
      (movieClip) => movieClip.type === "Trailer"
    );
    const movieVid = movieTrailer.length ? movieTrailer[0] : allVideo[0];

    dispatch(addTrailerVid(movieVid));
  };
  useEffect(() => {
    !trailer && backgroundVideo();
  }, []);
}