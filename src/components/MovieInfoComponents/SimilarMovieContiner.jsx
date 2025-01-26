import { useEffect } from "react";
import { MOVIE_INFO_URL, options } from "../../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../../slices/movieInfoSlice";
import MovieCard from "../MovieCard";
import { Link } from "react-router";

const SimilarMovieContainer=({movieId})=>{
    const dispatch = useDispatch();
    const similar = useSelector((store)=>store?.movieInfo?.similarMovies)
    const similarMovies = async()=>{
        const res = await fetch(MOVIE_INFO_URL+movieId+"/similar",options);
        const data = await res.json();
        // console.log(data.results);
        dispatch(addSimilarMovies(data.results));
    }

    useEffect(()=>{
        similarMovies();
    },[movieId])
    return(
        <div className="bg-black text-white p-2 mx-2 rounded-xl">
            <span className="sm:text-xl">Similar Movies</span>
            <div className="flex flex-wrap justify-center mt-5 gap-3">
                {similar && similar.map((movie)=><Link key={movie?.id} to={{pathname:'/movie',search:`info=${movie?.id}`}}>{movie?.poster_path &&<MovieCard poster={movie?.poster_path}/>}</Link> ) }
            </div>
            
        </div>
    )
}

export default SimilarMovieContainer;