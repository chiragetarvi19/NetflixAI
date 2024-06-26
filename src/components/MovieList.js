import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
    
  return (
    <div className="text-white">
        <h1 className="text-3xl py-4">{title}</h1>
        <div className="flex overflow-auto no-scrollbar">
        <div className="flex gap-x-4">
             {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
        </div>
        </div>
    </div>
  )
}

export default MovieList