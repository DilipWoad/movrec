const GeminiSearchBar=()=>{
    return(
        <div className="pt-[15%] flex justify-center">
            <form className="bg-purple-500 w-1/2 grid grid-cols-12">
                <input className="col-span-9 p-2 m-2" type="text" placeholder="What would you like to watch today?"/>
                <button className="bg-red-700 col-span-3 m-2 rounded-sm text-white font-bold">Search</button>
            </form>
        </div>
    )
}

export default GeminiSearchBar;