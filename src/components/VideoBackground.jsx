import { useEffect } from "react";
import { options } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const backgroundVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const res = await fetch(url, options);
    const data = await res.json();
    const allVideo = data.results;

    const movieTrailer = allVideo.filter(
      (movieClip) => movieClip.type === "Trailer"
    );
    const movieVid = movieTrailer.length ? movieTrailer[0] : allVideo[0];
    console.log(movieVid);
  };
  useEffect(() => {
    backgroundVideo();
  }, []);
  return <div>Video Background</div>;
};

export default VideoBackground;
