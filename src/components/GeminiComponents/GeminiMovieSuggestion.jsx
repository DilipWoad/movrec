import { useSelector } from "react-redux";
import MovieCard from "../MovieUtilsComponents/MovieCard";

const GeminiMovieSuggestion = () => {
  const movies = useSelector((store) => store?.gemini);
  const geminiMovieName = movies?.geminiSearchedMovieNames;
  const geminTMDBResults = movies?.geminiSearchedMovieResults;
  return (
    <div className="bg-black m-4 md:m-10 opacity-90 rounded-md flex flex-wrap justify-center">
      {geminTMDBResults?.map((movie, index) =>
        movie[0]?.poster_path ? (
          <MovieCard
            movieId={movie[0]?.id}
            key={geminiMovieName[index]}
            poster={movie[0].poster_path}
            css={"m-2"}
            postercss={""}
          />
        ) : null
      )}
    </div>
  );
};

export default GeminiMovieSuggestion;
