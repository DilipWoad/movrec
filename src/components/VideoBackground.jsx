import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector} from 'react-redux';
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store=>store.movie?.trailerVideo)
  return (
    <div className="w-screen relative">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+`${trailer?.key}`+"?rel=0&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
