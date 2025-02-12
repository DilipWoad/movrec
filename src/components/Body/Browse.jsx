import Header from "../Header/Header";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainerComponents/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecodaryContainer";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useTopRatedMovies } from "../../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import GeminiSearch from "../GeminiComponents/GeminiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const geminiStatus = useSelector((store) => store?.gemini?.GeminiStatus);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <Header />
      {geminiStatus ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
