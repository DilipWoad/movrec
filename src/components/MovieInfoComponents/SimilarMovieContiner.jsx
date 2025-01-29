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
        <div className="bg-black text-white p-2 rounded-xl">
            <div className="md:m-4 md:p-2 my-2">
                <span className="sm:text-2xl text-lg ">Similar Movies</span>
            </div>
            <div className="flex flex-wrap justify-center mt-5 gap-3">
                {similar && similar.map((movie)=><Link key={movie?.id} to={{pathname:'/movie',search:`info=${movie?.id}`}}>{movie?.poster_path &&<MovieCard poster={movie?.poster_path} css={"min-w-32 flex md:p-2 rounded-lg md:min-w-60 md:h-auto md:flex md:justify-center hover:cursor-default "} postercss={"min-w-32 md:h-56 rounded-md hover:cursor-pointer"}/>}</Link> ) }
            </div>
            <div className="flex gap-4 mt-5 text-lg justify-center">
                <div onClick={()=>setViewMore(!viewMore)} className={`${viewMore ? 'text-gray-500 hover:cursor-pointer hover:border-b-[1px] hover:border-white' : 'text-white border-b-[1px]'}  p-2 `}>1</div>
                <div onClick={()=>setViewMore(!viewMore)} className={`${!viewMore ? 'text-gray-500 hover:cursor-pointer hover:border-b-[1px] hover:border-white' : 'text-white border-b-[1px]'}  p-2 `}>2</div>
            </div>
        </div>
    )
}

export default SimilarMovieContainer;