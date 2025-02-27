import { useSelector } from "react-redux";
import MovieActorCard from "./MovieActorCard";
import { useEffect } from "react";

const MovieActorsContainer = () => {
  const actors = useSelector((store) => store?.movieInfo?.credits);
  console.log(actors);

  return (
    <div className="mb-5 bg-gray-500 h-auto rounded-lg p-2 flex overflow-x-scroll gap-2">
      {actors &&
        actors.map((actor) => (
          <MovieActorCard
            key={actor.id}
            name={actor.name}
            character={actor.character}
            profile={actor.profile_path}
            personId={actor.id}
          />
        ))}
    </div>
  );
};

export default MovieActorsContainer;
