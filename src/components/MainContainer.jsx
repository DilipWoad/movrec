import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies = useSelector((store)=>store.movie?.playingNow);
    if(!movies) return;
    const mainMovie = movies[0];
    // console.log(mainMovie)
    const {id,title,overview,poster_path} = mainMovie;
    return(
        <div className="bg-black">
            {/* Main Container */}
            <VideoTitle title={title} overview={overview} poster={poster_path} movieId={id}/>
            <VideoBackground movieId={id}/>  
        </div>
    )
}

export default MainContainer;