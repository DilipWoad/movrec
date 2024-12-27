import { useState } from "react";
import { MOVIE_IMG } from "../utils/constant";

const VideoTitle = ({ title,overview}) => {
  const [description, setDescription] = useState(false);
  const handleOverview = () => {
    return setDescription(!description);
  };
  return (
    <div className="w-full aspect-video flex items-center px-12 absolute z-10 bg-gradient-to-r from-black">
      <div className="">
        {/* <img className="hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-700" src={`${MOVIE_IMG}${logo}`} /> */}
        <h1 className="text-white text-5xl font-bold">{title}</h1>
        <div className="w-1/2 py-6">
          <p className="font-semibold  text-white">
            {description ? overview : overview.substring(0, 55)}{" "}
            <span
              onClick={handleOverview}
              className=" text-white font-bold  opacity-50 rounded-md hover:opacity-100 hover:cursor-pointer"
            >
              {description ? "Read Less" : "Read More..."}
            </span>
          </p>
        </div>
        <div className="">
          <button className="bg-white text-black font-semibold w-24 px-4 py-2 mr-2 rounded-lg hover:opacity-70">
            ▷ Play
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
