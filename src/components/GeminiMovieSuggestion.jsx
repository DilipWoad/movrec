import { useEffect } from "react";
import googleGemini from "../Gemini/googleGemini.js"

const GeminiMovieSuggestion=()=>{
    useEffect(()=>{
        googleGemini();
    },[])
    return(
        <div className="z-20">
            <p className="text-white">movie suggestion</p>
        </div>
    )
}

export default GeminiMovieSuggestion;