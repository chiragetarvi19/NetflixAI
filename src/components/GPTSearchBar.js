import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS, model } from "../utils/constants";
import { addAIMovieResults } from "../utils/gptSlice";


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleAISearchClick = async () => {

    const aiQuery="You are a Movie Recommendation System. Suggest some movies for the following query so that I can freshen my mood: " +
    searchText.current.value +
    ". Only give me names of max 5 movies, comma separated like the example result given ahead. Example: Movie A, Movie B, Movie C and so on.";

    const result = await model.generateContent(aiQuery);
    const response = await result.response;
    const aiResults = response.text();
    const resultMovies = aiResults?.split(",");

    const promiseArray = await resultMovies.map((movie)=> searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addAIMovieResults({movieNames: resultMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 my-4 mx-2 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-4 m-4 bg-blue-700 text-white rounded-md col-span-3"
          onClick={handleAISearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
