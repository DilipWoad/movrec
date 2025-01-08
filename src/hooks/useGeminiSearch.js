import { model } from "../utils/Gemini/googleGemini";
import { options, SEARCH_MOVIE_URL } from "../utils/TMDBurls/tmdbUrls";


const useGeminiSearch = async(searchPrompt)=>{
    const fetchMovieFromTMDB=async(movie)=>{
        const data = await fetch(SEARCH_MOVIE_URL+movie+"&include_adult=false&language=en-US&page=1",options);
        const json = await data.json();
        return json?.results;
    };
    
    const geminiQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + 
    searchPrompt + 
    ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal,Koi Mil Gaya"

    const result = await model.generateContent(geminiQuery);
    console.log(result?.response?.text()) //it give direct text
    const geminiMovie = result?.response?.text().split(",");
    console.log(geminiMovie);

    const arrayOfPromies =geminiMovie.map((movie)=>fetchMovieFromTMDB(movie.trim())) //this will return Array of Promises

    const geminiResults = await Promise.all(arrayOfPromies) //this will resolve array of promises and return the results and not the promise
    console.log(geminiResults);
    return {geminiResults,geminiMovie};
}

export default useGeminiSearch;