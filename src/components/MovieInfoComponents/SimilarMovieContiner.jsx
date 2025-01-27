import { useEffect, useState } from "react";
import { MOVIE_INFO_URL, options } from "../../utils/TMDBurls/tmdbUrls";
import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../../slices/movieInfoSlice";
import MovieCard from "../MovieCard";
import { Link } from "react-router";

const SimilarMovieContainer=({movieId})=>{
    const[viewMore,setViewMore] = useState(false)
    const dispatch = useDispatch();
    const similar = useSelector((store)=>store?.movieInfo?.similarMovies)
    const similarMovies = async()=>{
        const res = await fetch(MOVIE_INFO_URL+movieId+`/recommendations${viewMore ? "?language=en-US&page=2":""}`,options);
        const data = await res.json();
        // console.log(data);
        dispatch(addSimilarMovies(data.results));
    }

    useEffect(()=>{
        similarMovies();
    },[movieId,viewMore]) 
    return(
        <div className="bg-black text-white p-2 mx-2 rounded-xl">
            <span className="sm:text-xl">Similar Movies</span>
            <div className="flex flex-wrap justify-center mt-5 gap-3">
                {similar && similar.map((movie)=><Link key={movie?.id} to={{pathname:'/movie',search:`info=${movie?.id}`}}>{movie?.poster_path &&<MovieCard poster={movie?.poster_path}/>}</Link> ) }
                {
                    !viewMore ? <div onClick={()=>setViewMore(!viewMore)} className=" text-white w-24 md:w-32 md:h-48 pr-2 hover:cursor-pointer bg-gray-400 flex justify-center items-center hover:bg-gray-500">
                                    <div className="md:text-3xl text-lg text-center">
                                        Page 2→
                                    </div>
                                </div> 
                                : 
                                <div onClick={()=>setViewMore(!viewMore)} className=" text-white w-24 md:w-32 md:h-48 pr-2 hover:cursor-pointer bg-gray-400 flex justify-center items-center hover:bg-gray-500">
                                    <div className="md:text-3xl text-lg text-center">
                                    ←Page 1
                                    </div>
                                </div>
                }
            </div>
        </div>
    )
}

export default SimilarMovieContainer;