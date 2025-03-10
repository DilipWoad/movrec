import { useSelector } from "react-redux";
import { useMovieInfoTrailer } from "../../hooks/movieInfoHooks/useMovieInfoTrailer";

const MovieTrailerContainer = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movieInfo?.trailerVideo);
  useMovieInfoTrailer(movieId);
  // console.log(trailer)
  return (
    <div className="bg-black mt-4 sm:mt-0 mb-4 h-48 w-full sm:h-[350px]  flex items-center justify-center sm: rounded-xl">
      <div className="w-full sm:w-[600px]">
        {
          <iframe
            className="w-full aspect-video rounded-lg"
            src={
              "https://www.youtube.com/embed/" +
              `${trailer?.key}` +
              "?rel=0&mute=0&autoplay=0&controls=0&playsinline=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;loop;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        }
      </div>
    </div>
  );
};

export default MovieTrailerContainer;
