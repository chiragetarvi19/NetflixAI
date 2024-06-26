import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black px-6 w-screen">
        <div className="-mt-[19%] relative z-10">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        </div>
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
