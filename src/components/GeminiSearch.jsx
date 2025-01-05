import { NETFLIX_BACKGROUND } from "../utils/constant";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearch=()=>{
    return(
        <div>
            <div className="absolute -z-10">
                <img src={NETFLIX_BACKGROUND} alt="background"/>
            </div>
            <GeminiSearchBar/>
            <GeminiMovieSuggestion/>
        </div>
    )
}

export default GeminiSearch;