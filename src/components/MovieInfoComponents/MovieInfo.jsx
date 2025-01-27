import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { MOVIE_INFO_URL, options } from "../../utils/TMDBurls/tmdbUrls";
import { useDispatch,useSelector } from "react-redux";
import { addCreditsInfo, addDirector, addMovieInfo } from "../../slices/movieInfoSlice";
import MovieTrailerContainer from "./MovieTrailerContainer";
import MovieDetailsContainer from "./MovieDetailsContainer";
import SimilarMovieContainer from "./SimilarMovieContiner";
import MovieActorsContainer from "./MovieActorsContainer";

const MovieInfo=()=>{
    const dispatch = useDispatch();
    const movieData = useSelector((store)=>store?.movieInfo?.movieInfo)
    // console.log(movieData)
    
    const[searchParams,setSearchParams]  = useSearchParams();
    const movieId = searchParams.get("info");

    const movieCredits =async()=>{
        const data =  await fetch(MOVIE_INFO_URL+movieId+"/credits?language=en-US",options);

        const credits = await data.json();

        const actors = credits?.cast?.filter((actor)=>actor?.known_for_department==='Acting');
        // console.log(actors);
        dispatch(addCreditsInfo(actors));

        const director =  credits?.crew?.filter((person)=>person?.job==='Director');
        dispatch(addDirector(director));

        // console.log(director);
        console.log(credits);
    }
    const movieInformation = async()=>{
        const data = await fetch(MOVIE_INFO_URL+movieId,options);
        const movieInfo = await data.json();
        dispatch(addMovieInfo(movieInfo));
    }
    useEffect(()=>{
        movieCredits();
        movieInformation();
        window.scrollTo(0,0);
    },[movieId])
    if(!movieId) return;
    return(
        movieId && <div>
        {/* Movie Information of ID : {movieId} */}
        <MovieTrailerContainer movieId={movieId}/>
        {movieData && <MovieDetailsContainer movieInfo={movieData}/>}
        {/* actors */}
        <MovieActorsContainer/>
        <SimilarMovieContainer movieId={movieId}/>
        {/* similar movies and trailer not changing */}
    </div>
    )
}

export default MovieInfo;