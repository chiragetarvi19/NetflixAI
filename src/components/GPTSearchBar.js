import { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");

  const gptQuery =
    "Act as a Movie Recommendation System and suggest some movies for the query" +
    searchText.current.value +
    ". Only give me names of max 10 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/" +
          movie +
          "?include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };


  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });


    if (!gptResults.choices){//to
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    const resultMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const data = await resultMovies.map((movie)=> searchMovieTMDB(movie));
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
          // onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
