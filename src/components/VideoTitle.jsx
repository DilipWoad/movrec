import { useState } from "react";
import MovieCard from "./MovieCard";

const VideoTitle = ({ title,overview,poster,movieId}) => {
  const [description, setDescription] = useState(false);
  const handleOverview = () => {
    return setDescription(!description);
  };
  return (
    <div className="w-full pl-4 aspect-video flex items-center md:px-12 absolute z-10 bg-gradient-to-r from-black">
      <div className="mb-8">
        {/* <img className="hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-700" src={`${MOVIE_IMG}${logo}`} /> */}
        <h1 className="hidden md:block text-white text-[15px] md:text-4xl font-bold">{title}</h1>
        <div className=" p-3  md:w-1/2 md:py-6">
          <p className="font-semibold hidden md:block text-white">
            {description ? overview : overview.substring(0, 55)}{" "}
            <span
              onClick={handleOverview}
              className=" text-white font-bold  opacity-50 rounded-md hover:opacity-100 hover:cursor-pointer"
            >
              {description ? "Read Less" : "Read More..."}
            </span>
          </p>
        </div>
        <div className="flex">
          <div className="md:hidden">
            {/* <h2 className=" text-white text-[15px] md:text-4xl font-bold">{title}</h2> */}
            <MovieCard movieId={movieId} css={""} poster={poster} postercss={"h-[120px] rounded-lg ml-3"} />
          </div>
          
          <button className="bg-white hidden md:block text-black font-semibold w-14 py-1 rounded-md md:w-24 md:px-4 md:py-2 md:mr-2 md:rounded-lg hover:opacity-70">
            ▷ Play
          </button>
          <button className="bg-black hidden md:block text-white px-4 py-2 rounded-lg hover:opacity-80">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
