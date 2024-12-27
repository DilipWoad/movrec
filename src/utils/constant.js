const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg";
//for now hardcode user  Img
const AVATAR_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlv7ddXYmaIy8KaYktoIGX2mi6j_8TrvALQ&s";

const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};
const MOVIE_IMG = "https://image.tmdb.org/t/p/w200";

export { NETFLIX_LOGO, NETFLIX_BACKGROUND, AVATAR_LOGO, NOW_PLAYING_URL,POPULAR_URL,TOP_RATED_URL,UPCOMING_URL, options ,MOVIE_IMG };
