import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector} from 'react-redux';
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store=>store.movie?.trailerVideo)
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+`${trailer?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
