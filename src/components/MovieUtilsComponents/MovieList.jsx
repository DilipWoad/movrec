import MovieCard from "./MovieCard";

const MovieList = ({ heading, movies, css }) => {
  if (!movies) return;
  // const {id,title,vote_average,backdrop_path,poster_path} = movies;
  return (
    <div className={`md:px-10 md:py-2 ${css}`}>
      <h1 className="text-md md:text-2xl py-2 font-semibold text-white">
        {heading}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) =>
            movie?.poster_path ? (
              <MovieCard
                key={movie?.id}
                movieId={movie?.id}
                org_title={movie?.title}
                poster={movie?.poster_path}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
