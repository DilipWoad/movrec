import { useSelector } from "react-redux";
import { lang } from "../utils/constLanguage";
import { useRef } from "react";
// import googleGemini from "../Gemini/googleGemini";
import { model } from "../Gemini/googleGemini";

const GeminiSearchBar=()=>{
    const prompt = useRef(null);
    const language = useSelector((store)=>store?.lang?.selectedLanguage);

    const handleSearchClick = async()=>{
        console.log(prompt?.current?.value)
        const searchPrompt = prompt?.current?.value;
        // const ans = await googleGemini(searchPrompt);
        // console.log(ans);
        const result = await model.generateContent(searchPrompt);
        console.log(result?.response?.text())
        prompt.current.value = ""
    }
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