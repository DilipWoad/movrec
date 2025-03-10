import { useEffect } from "react";
import { useParams } from "react-router";
import { MOVIE_ACTOR_DETAILS, options } from "../../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import {
  addActorCredits,
  addActorDetails,
} from "../../slices/actorDetailSlice";
import ActorProfile from "./ActorProfile";

const ActorInformation = () => {
  const dispatch = useDispatch();
  const actorInformation = useSelector((store) => store.actor);
  const { personId } = useParams();
  console.log(personId);
  console.log(actorInformation);

  //https://developer.themoviedb.org/reference/person-movie-credits

  const actorDetails = async () => {
    const personDetail = await fetch(
      MOVIE_ACTOR_DETAILS + personId + "?language=en-US",
      options
    );
    const personCredits = await fetch(
      MOVIE_ACTOR_DETAILS + personId + "/movie_credits?language=en-US",
      options
    );
    const detailsData = await personDetail.json();
    const creditsData = await personCredits.json();

    dispatch(addActorDetails(detailsData));
    dispatch(addActorCredits(creditsData));
  };
  useEffect(() => {
    !actorInformation?.details && actorDetails();
  }, []);

  if (!actorInformation?.details) return;
  return (
    <div className="md:pt-24">
      <ActorProfile />
    </div>
  );
};

export default ActorInformation;
