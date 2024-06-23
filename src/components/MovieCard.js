import { IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-44">
        <img alt="Movie Poster"
        src={IMAGE_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard