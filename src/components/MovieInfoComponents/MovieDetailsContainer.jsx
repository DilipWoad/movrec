import { useSelector } from "react-redux";
import { MOVIE_IMG } from "../../utils/constant";

const MovieDetailsContainer=({movieInfo})=>{
    const {title,vote_average,vote_count,status,runtime,release_date,overview,original_language,id,genres,backdrop_path,poster_path} = movieInfo;
    console.log(genres)
    const directed = useSelector((store)=>store?.movieInfo?.director);
    console.log("dfager",directed)
    return(
        <>
        <div className="bg-slate-300 w-[100%] p-2 flex space-x-1 sm:mx-2 rounded-xl">
            <div className="  flex  w-40">
                <div className="w-full">
                    <img src={MOVIE_IMG+poster_path} alt="movie_poster" />
                    <div className="mt-2 text-lg sm:text-3xl font-bold">{vote_average}<span className="text-sm font-semibold">/10</span></div>
                </div>
            </div>
            <div className="w-60 px-2 flex flex-col">
                <div className=" pb-2 ">
                    <div className="text-xl font-semibold">
                    {title}
                    </div>
                    <div className=" mt-4 ">Year : {release_date}</div>
                </div>
                
                <div className="mt-8">
                   <span className="font-bold">Generes</span> : {genres && genres.map((genre)=>genre.name).join(',')}
                </div>
                {
                    directed && <div className="mt-10 font-semibold ">
                    <span className="text-[15px] sm:text-lg font-bold">Directed By:-</span> {directed[0]?.name}
                </div>
                }
            </div>
        </div>
        <div className=" p-2 m-2 rounded-md sm:text-lg sm:my-5 bg-slate-400">
            <span className="font-semibold">Overview</span> : {overview}
        </div> 
        </>
        
    )
}

export default MovieDetailsContainer;