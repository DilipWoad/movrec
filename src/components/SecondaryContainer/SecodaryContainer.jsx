import MovieList from "../MovieUtilsComponents/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movie);
  const nowPlaying = movieData?.playingNow;
  const popularMovie = movieData?.popular;
  const topRatedMovie = movieData?.topRated;
  const upcomingMovie = movieData?.upcoming;
  return (
    nowPlaying && (
      <div className="bg-black ">
        <div className="relative -mt-16 md:-mt-64 md:pl-2 z-20 ">
          <MovieList heading={"Playing Now"} movies={nowPlaying} css={"px-4"} />
          <MovieList heading={"Popular"} movies={popularMovie} css={"px-4"} />
          <MovieList
            heading={"Top Rated"}
            movies={topRatedMovie}
            css={"px-4"}
          />
          <MovieList
            heading={"Upcoming Movies"}
            movies={upcomingMovie}
            css={"px-4"}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
