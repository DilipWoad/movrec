import { useEffect } from "react";
import { useParams } from "react-router";
import { MOVIE_ACTOR_DETAILS, options } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addActorDetails } from "../slices/actorDetailSlice";

const ActorInformation=()=>{
    const dispatch = useDispatch();
    const actorInformation = useSelector((store)=>store.actor);
    const {personId} = useParams(); 
    console.log(personId);

    const actorDetails=async()=>{
       const response =  await fetch(MOVIE_ACTOR_DETAILS+personId+"?language=en-US",options);
       const data = await response.json();

       console.log(data);
       dispatch(addActorDetails(data));
    }
    useEffect(()=>{
        actorDetails();
    },[])

    if (!actorInformation) return;
    return(
        <h1>
            {actorInformation.name} : {personId}
        </h1>
    )
}


export default ActorInformation;