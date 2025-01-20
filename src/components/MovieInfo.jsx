import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { MOVIE_CREDITS_URL, options } from "../utils/TMDBurls/tmdbUrls";
import { useDispatch } from "react-redux";
import { addCreditsInfo, addMovieInfo } from "../slices/movieInfoSlice";

const MovieInfo=()=>{
    const dispatch = useDispatch();
    const[searchParams,setSearchParams]  = useSearchParams();
    const movieId = searchParams.get("info");

    const movieCredits =async()=>{
        const data =  await fetch(MOVIE_CREDITS_URL+movieId+"/credits?language=en-US",options);
        const credits = await data.json();
        dispatch(addCreditsInfo(credits));
        // console.log(credits);
    }
    const movieInformation = async()=>{
        const data = await fetch(MOVIE_CREDITS_URL+movieId,options);
        const movieInfo = await data.json();
        dispatch(addMovieInfo(movieInfo));
        // console.log(movieInfo);
    }
    useEffect(()=>{
        movieCredits();
        movieInformation();
    },[])
    return(
        <div>
            Movie Information of ID : {movieId}
            Working on it...
        </div>
    )
}

export default MovieInfo;