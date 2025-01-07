import { useSelector } from "react-redux";
import { lang } from "../utils/constLanguage";
import { useRef } from "react";
// import googleGemini from "../Gemini/googleGemini";
import { model } from "../utils/Gemini/googleGemini";
import { options, SEARCH_MOVIE_URL } from "../utils/urls/tmdbUrls";

const GeminiSearchBar=()=>{
    const prompt = useRef(null);
    const language = useSelector((store)=>store?.lang?.selectedLanguage);

    //Fetching Movie from TMDB API
    const fetchMovieFromTMDB=async(movie)=>{
        const data = await fetch(SEARCH_MOVIE_URL+movie+"&include_adult=false&language=en-US&page=1",options);

        const json = await data.json();

        return json?.results;
    };

    const handleSearchClick = async()=>{
        console.log(prompt?.current?.value)
        const searchPrompt = prompt?.current?.value;
        // const ans = await googleGemini(searchPrompt);
        // console.log(ans);
        const geminiQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + 
        searchPrompt + 
        ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal,Koi Mil Gaya"
        const result = await model.generateContent(geminiQuery);
        console.log(result?.response?.text()) //it give direct text
        // console.log(result?.response?.candidates[0]?.content?.parts) //this give array of movies
        const gemminiMovie = result?.response?.text().split(",");
        console.log(gemminiMovie);

        const arrayOfPromies =  gemminiMovie.map((movie)=> fetchMovieFromTMDB(movie.trim())) //this will return Array of Promises

        const movieData = await Promise.all(arrayOfPromies) //this will resolve array of promises and return the results and not the promise
        console.log(movieData);
        
        prompt.current.value = ""
    };

    return(
        <div className="pt-[15%] flex justify-center">
            <form className="bg-purple-500 w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={prompt} className="col-span-9 p-2 m-2 placeholder:text-gray-400" type="text" placeholder={lang[language].geminiPlaceholder}/>
                <button onClick={handleSearchClick} className="bg-red-700 col-span-3 m-2 rounded-sm text-white font-bold">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GeminiSearchBar;