import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" 
        + trailerVideo?.key 
        + "?autoplay=1;&c0ntrols=0;&loop=1;&mute=1;&modestbranding=1;"
    }
        title="YouTube video player"
        allow="autoplay;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
