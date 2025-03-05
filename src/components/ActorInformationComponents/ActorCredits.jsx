import { useSelector } from "react-redux";
import MovieCard from "../MovieUtilsComponents/MovieCard";
import { useState } from "react";

const ActorCredits = () => {
  const movieCredits = useSelector((store) => store.actor.credits);
  const [viewAll, setViewAll] = useState(false);
  const [count,setcount] = useState(11)
  var movieCount = 0;
  return (
    <div className="bg-pink-400 mt-3 p-2">
      <div className="font-semibold text-2xl my-3">Known For</div>
      <div className="flex flex-wrap justify-between  md:justify-center bg-lime-300">
        {movieCredits.cast.map((credit) => {
          if (!credit.poster_path) return;
          movieCount += 1;
          if (movieCount <= count) {
            return (
              <MovieCard
                key={credit.id}
                poster={credit.poster_path}
                movieId={credit.id}
                css={
                  "min-w-24 flex m-2 rounded-lg md:p-2  md:min-w-60 md:h-auto md:flex md:justify-center hover:cursor-default "
                }
                postercss={"min-w-[100px] md:min-w-28 md:h-56 rounded-md hover:cursor-pointer"}
              />
            );
          }
        })}

        { movieCredits.cast.length >= count &&
            <div
            onClick={() => {setViewAll(!viewAll), setcount(!viewAll? movieCredits.cast.length : 11)}}
            className=" flex m-2 w-[99px] items-center text-center justify-center md:w-40 hover:cursor-pointer "
          >
            <div className="bg-red-300 w-full h-16 rounded-lg flex justify-center items-center text-lg md:text-xl font-semibold text-nowrap">
            {viewAll ? "View Less" : "View All"}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ActorCredits;
