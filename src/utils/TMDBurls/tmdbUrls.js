const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

const SEARCH_MOVIE_URL = 
    "https://api.themoviedb.org/3/search/movie?query=";
  
const MOVIE_INFO_URL = 'https://api.themoviedb.org/3/movie/';
// const MOVIE_INFO_URL = 'https://api.themoviedb.org/3/movie/';

const MOVIE_ACTOR_DETAILS = 'https://api.themoviedb.org/3/person/';

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

export{
    NOW_PLAYING_URL,
    POPULAR_URL,
    TOP_RATED_URL,
    UPCOMING_URL,
    SEARCH_MOVIE_URL,
    MOVIE_INFO_URL,
    MOVIE_ACTOR_DETAILS,
    options
}