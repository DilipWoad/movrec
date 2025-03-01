import { useState } from "react";
import { useSelector } from "react-redux";
import { ACTOR_EMPTY_ICON, MOVIE_IMG } from "../../utils/constant";
import { AgeCalculator } from "../../utils/AgeCalculator";

const ActorProfile = () => {
    const actorDetails = useSelector((store)=>store?.actor?.details);
  const [readMore, setReadMore] = useState(false);
  const overview = actorDetails?.biography
  const age = AgeCalculator(actorDetails?.birthday)
  return (
    <>
      <div className=" bg-lime-300 flex justify-center items-center flex-col">
        <img
          className="bg-purple-400 h-60 w-auto mt-5 mb-3 "
          src={actorDetails.profile_path ? MOVIE_IMG+actorDetails?.profile_path : ACTOR_EMPTY_ICON}
          alt="actor-image"
        />
        <div className="text-center w-72 ">
          <h1 className="text-4xl font-bold">{actorDetails?.name}</h1>
        </div>
      </div>
      <div className="bg-yellow-200 my-3 p-2">
        <h1>Age : {age}</h1>
        <h1>Birth Date : {actorDetails?.birthday}</h1>
        <h1>Born At : {actorDetails?.place_of_birth}</h1>
      </div>
      <div className="bg-purple-400 p-2">
        <p className="font-semibold text-lg">
          Biography : {readMore ? overview : overview.substring(0, 300)}{" "}
          <span
            onClick={() => setReadMore(!readMore)}
            className=" text-white font-bold  opacity-50 rounded-md hover:opacity-100 hover:cursor-pointer"
          >
            {readMore ? "Read Less" : "Read More..."}
          </span>
        </p>
      </div>
    </>
  );
};

export default ActorProfile;
