import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecodaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GeminiSearch from "./GeminiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const geminiStatus = useSelector((store)=>store?.gemini?.GeminiStatus)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div className="">
      <Header />
      {geminiStatus ? <GeminiSearch/> : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
    </div>
  );
};

export default Browse;
