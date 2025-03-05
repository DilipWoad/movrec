import { useState } from "react";
import { useSelector } from "react-redux";
import { ACTOR_EMPTY_ICON, MOVIE_IMG } from "../../utils/constant";
import { AgeCalculator } from "../../utils/AgeCalculator";

const ActorProfile = () => {
  const actorDetails = useSelector((store) => store?.actor?.details);
  const [readMore, setReadMore] = useState(false);
  const overview = actorDetails?.biography;
  const age = AgeCalculator(actorDetails?.birthday);
  return (
    <>
      <div className=" bg-lime-300 flex justify-center items-center flex-col">
        <div className="md:flex bg-pink-300">
          <div className="bg-cyan-200 md:m-5 md:min-w-[400px] md:rounded-lg">
            <div className="flex justify-center md:min-w-80 md:h-auto md:my-3">
              <img
                className="bg-purple-400 h-64 md:h-auto w-auto md:w-72 mt-5 mb-3 rounded-lg shadow-xl "
                src={
                  actorDetails.profile_path
                    ? MOVIE_IMG + actorDetails?.profile_path
                    : ACTOR_EMPTY_ICON
                }
                alt="actor-image"
              />
            </div>
            <div className="text-center flex justify-center w-full md:w-auto mb-4 bg-sky-300 md:mx-2 md:rounded-lg md:py-2">
              <div className="w-72 md:w-auto">
                <h1 className="text-4xl font-bold ">{actorDetails?.name}</h1>
              </div>
            </div>
            <div className="bg-yellow-200 my-3 p-2 md:flex-2 md:text-xl md:p-4 md:space-y-3 md:mx-2 md:rounded-lg">
              <h1>Age : {age}</h1>
              <h1>Birth Date : {actorDetails?.birthday}</h1>
              {actorDetails?.deathday && <h1>Death Date : {actorDetails?.deathday}</h1>}
              <h1>Born At : {actorDetails?.place_of_birth}</h1>
            </div>
          </div>
          <div className="bg-purple-400 p-2 md:my-5 md:mr-5 md:rounded-lg">
            <div className="md:h-auto md:bg-lime-200 md:rounded-lg">
              <p className="text-lg text-justify p-2 font-light">
                <span className="md:text-xl font-semibold md:font-normal">
                  Biography :{" "}
                </span>
                {readMore ? overview : overview.substring(0, 300)}{" "}
                <span
                  onClick={() => setReadMore(!readMore)}
                  className=" text-white font-bold  opacity-50 rounded-md hover:opacity-100 hover:cursor-pointer"
                >
                  {readMore ? "Read Less" : "Read More..."}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorProfile;
