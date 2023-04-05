const API_KEY = "741e3023a16ed3ab8543c4b99c09f74b";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with-network=213`,
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchDiscover: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovice: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchRatings: `/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
