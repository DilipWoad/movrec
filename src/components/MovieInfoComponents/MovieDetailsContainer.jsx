import { useSelector } from "react-redux";
import { MOVIE_IMG } from "../../utils/constant";

const MovieDetailsContainer=({movieInfo})=>{
    const {title,vote_average,vote_count,status,runtime,release_date,overview,original_language,id,genres,backdrop_path,poster_path} = movieInfo;
    const directed = useSelector((store)=>store?.movieInfo?.director);
    return(
        <>
        <div className=" w-[100%] py-2 sm:flex sm:space-x-1 rounded-xl my-2 md:mb-0">
            <div className="bg-slate-400 flex p-2 gap-2 rounded-lg text-wrap sm:text-nowrap">
                <div className="flex  w-40">
                    <div className="min-w-32 sm:w-full">
                        <img className="hover:shadow-2xl hover:shadow-black rounded-lg" src={MOVIE_IMG+poster_path} alt="movie_poster" />
                        <div className="mt-2 text-lg sm:text-3xl font-bold">{vote_average}<span className="text-lg font-semibold">/10</span></div>
                    </div>
                </div>
                <div className="min-w-24 w-full sm:w-auto px-2 bg-slate-300 flex flex-col rounded-lg">
                    <div className=" flex-1 flex flex-col px-2 justify-between">
                        <div className="text-xl sm:text-3xl font-semibold sm:h-20 flex flex-col justify-between">
                            <div className="md:w-96 md:text-wrap">{title}</div>
                            <div className="text-sm sm:text-lg font-medium">{`(${release_date.substring(0,4)})`}</div>
                        </div>
                        <div className="text-sm sm:text-lg  h-20">
                            <span className="font-bold">Generes : </span>{genres && genres.map((genre)=>genre.name).join(', ')}
                        </div>
                    </div>
                    {
                    directed && <div className="px-2 text-sm mb-2 sm:mb-0 sm:h-[68px] sm:text-lg">
                                    <span className="text-[15px] sm:text-lg font-bold">Directed By:-</span> {directed[0]?.name}
                                </div>
                    }
                </div>
            </div>
            <div className="mt-1 sm:mt-0 p-2 rounded-md sm:text-lg bg-slate-400 ">
                <span className="font-semibold text-xl">Overview :</span>  {overview}
            </div>
        </div>
        {/* <div className="p-2 my-2  rounded-md sm:text-lg sm:my-5 bg-slate-400 ">
            <span className="font-semibold text-xl">Overview :</span>  {overview}
        </div>  */}
        </>
        
    )
}

export default MovieDetailsContainer;