import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies = useSelector((store)=>store.movie?.playingNow);
    if(!movies) return;
    const mainMovie = movies[0];
    const {id,title,overview} = mainMovie;
    return(
        <div className="bg-black">
            {/* Main Container */}
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground movieId={id}/>  
        </div>
    )
}

export default MainContainer;