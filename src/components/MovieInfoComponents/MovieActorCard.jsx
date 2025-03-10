import { Link } from "react-router";
import { ACTOR_EMPTY_ICON, MOVIE_IMG } from "../../utils/constant";

const MovieActorCard = ({ name, character, profile, personId }) => {
  return (
    <div className="bg-slate-300 h-auto p-2 rounded-md hover:shadow-xl hover:shadow-gray-500 ">
      <Link to={`/person/${personId}`}>
        <div className="h-40 w-32 rounded-full bg-white overflow-hidden flex justify-center items-center m-2 hover:cursor-pointer">
          <img
            className=""
            src={profile ? MOVIE_IMG + profile : ACTOR_EMPTY_ICON}
            alt="actor"
          />
        </div>
        <h2 className="font-semibold  mb-2 hover:text-gray-600 hover:cursor-pointer">
          {name}
        </h2>
      </Link>
      <p className="font-extralight">{character}</p>
    </div>
  );
};
export default MovieActorCard;
