import { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
// import googleGemini from "../Gemini/googleGemini.js"

const GeminiMovieSuggestion=()=>{
    const movies = useSelector((store)=>store?.gemini);
    const geminiMovieName = movies?.geminiSearchedMovieNames;
    const geminTMDBResults = movies?.geminiSearchedMovieResults;
    return(
        <div className="bg-black m-10 opacity-90 rounded-md">
            {geminTMDBResults?.map((movie,index)=>(
                <MovieList key={geminiMovieName[index]} heading={geminiMovieName[index]} movies={movie}/>
            ))}
        </div>
    )
}

export default GeminiMovieSuggestion;