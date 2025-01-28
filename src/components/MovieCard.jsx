import { MOVIE_IMG } from "../utils/constant";

const MovieCard=({poster,css,postercss})=>{
    return(
        <div className={`w-24 md:w-32 md:h-48 pr-2 hover:cursor-pointer ${css}`} >
            <img className={`hover:border-2 hover:shadow-2xl hover:shadow-gray-600 ${postercss}`} src={MOVIE_IMG+poster} />
        </div>
    )
}
export default MovieCard;