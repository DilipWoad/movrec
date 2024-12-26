import { MOVIE_IMG } from "../utils/constant";

const VideoTitle=({title,movieId,overview,logo})=>{
    return(
        <div className="pt-24 px-12">
            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
            <img src={`${MOVIE_IMG}${logo}`}/>
            <p className="w-1/2 py-6 font-semibold">{overview}</p>
            <div className="">
                <button className="bg-slate-600 text-white w-24 px-4 py-2 mr-2">▷ Play</button>
                <button className="bg-black text-white px-4 py-2 ">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;