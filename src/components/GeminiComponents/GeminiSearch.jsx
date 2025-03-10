import { NETFLIX_BACKGROUND } from "../../utils/constant";
import GeminiMovieSuggestion from "../GeminiComponents/GeminiMovieSuggestion";
import GeminiSearchBar from "../GeminiComponents/GeminiSearchBar";

const GeminiSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover md:w-screen md:fixed"
          src={NETFLIX_BACKGROUND}
          alt="background"
        />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestion />
    </div>
  );
};
export default GeminiSearch;
