import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" 
        + trailerVideo?.key 
        + "?autoplay=1&controls=0&loop=1&mute=1&modestbranding=1&rel=0&playlist="
        + trailerVideo?.key
    }
        title="YouTube video player"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
