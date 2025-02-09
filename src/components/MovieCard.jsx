import { Link } from "react-router";
import { MOVIE_IMG } from "../utils/constant";

const MovieCard=({poster,css,postercss,movieId})=>{
    return(
        <div className={`w-24 md:w-32 md:h-48 pr-2 ${css}`} >
            <Link to={{pathname:'/movie',search:`info=${movieId}`}} ><img className={`hover:border-2 hover:shadow-2xl hover:shadow-gray-600 ${postercss}`} src={MOVIE_IMG+poster} /></Link>
        </div>
    )
}
export default MovieCard;