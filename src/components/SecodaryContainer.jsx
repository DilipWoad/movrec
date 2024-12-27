import MovieList from "./MovieList.jsx";
import {useSelector} from 'react-redux';

const SecondaryContainer=()=>{
    const movieData = useSelector((store)=>store.movie);
    const nowPlaying = movieData?.playingNow;
    const popularMovie = movieData?.popular;
    const topRatedMovie = movieData?.topRated;
    const upcomingMovie = movieData?.upcoming;
    return(
        nowPlaying &&(
            <div className="bg-black">
                <div className="relative -mt-64 pl-2 z-20">
                    <MovieList heading={"Playing Now"} movies={nowPlaying} css={""}/>
                    <MovieList heading={"Popular"} movies={popularMovie}/>
                    <MovieList heading={"Top Rated"} movies={topRatedMovie}/>
                    <MovieList heading={"Upcoming Movies"} movies={upcomingMovie}/>
                </div> 
            </div>
        )
    )
}

export default SecondaryContainer;