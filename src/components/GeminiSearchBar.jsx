import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/constLanguage";
import { useRef } from "react";
import { addGeminiMovies } from "../slices/geminiSearchSlice";
import useGeminiSearch from "../hooks/useGeminiSearch";
import { AddErrorMessage } from "../slices/errorSlice";

const GeminiSearchBar=()=>{
    const dispatch = useDispatch();
    const prompt = useRef(null);
    const language = useSelector((store)=>store?.lang?.selectedLanguage);

    const handleSearchClick = async()=>{
        console.log(prompt?.current?.value)
        const searchPrompt = prompt?.current?.value;
        //useHook here
        try {
            const{geminiResults,geminiMovie} = await useGeminiSearch(searchPrompt);
            dispatch(addGeminiMovies({movieNames:geminiMovie,movieResults:geminiResults}));
        } catch (error) {
            console.log(error);
            dispatch(AddErrorMessage(error));
        }
        //Hook end here
        prompt.current.value = ""
    };

    return(
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12 rounded-md opacity-90" onSubmit={(e)=>e.preventDefault()}>
                <input ref={prompt} className="col-span-9 p-2 m-2 placeholder:text-gray-400" type="text" placeholder={lang[language].geminiPlaceholder}/>
                <button onClick={handleSearchClick} className="bg-red-700 col-span-3 m-2 rounded-sm text-white font-bold">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GeminiSearchBar;