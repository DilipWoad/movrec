import { useMovieTrailer } from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  return (
    <div className="w-screen">
      {
        <iframe
          className="w-full aspect-video bg-black "
          src={
            "https://www.youtube.com/embed/" +
            `${trailer?.key}` +
            "?rel=0&mute=1&controls=0&playsinline=1&autoplay=1&loop=1&playlist=" +
            `${trailer?.key}`
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay;loop;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      }
    </div>
  );
};

export default VideoBackground;
