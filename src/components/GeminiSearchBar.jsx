import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/constLanguage";

const GeminiSearchBar=()=>{
    const language = useSelector((store)=>store?.lang?.selectedLanguage);
    return(
        <div className="pt-[15%] flex justify-center">
            <form className="bg-purple-500 w-1/2 grid grid-cols-12">
                <input className="col-span-9 p-2 m-2 placeholder:text-gray-400" type="text" placeholder={lang[language].geminiPlaceholder}/>
                <button className="bg-red-700 col-span-3 m-2 rounded-sm text-white font-bold">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GeminiSearchBar;