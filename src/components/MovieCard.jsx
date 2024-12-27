import { MOVIE_IMG } from "../utils/constant";

const MovieCard=({poster})=>{
    return(
        <div className="w-32 h-48 pr-2 hover:cursor-pointer">
            <img className="hover:border-2 hover:shadow-2xl hover:shadow-gray-600" src={MOVIE_IMG+poster} />
        </div>
    )
}
export default MovieCard;