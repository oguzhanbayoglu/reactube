import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="card card-compact w-[20.2rem] max-h-[20rem] bg-transparent transition-[background-color] duration-[150ms]">
      <Link
        to={videoId ? `/video/${videoId}` : `/channel/${snippet?.channelId}`}
      >
        <figure className="h-[11.2rem] rounded-2xl overflow-hidden">
          <img src={snippet?.thumbnails?.high?.url} alt="Shoes" />
        </figure>
        <div className="card-body bg-transparent transition-[background-color] duration-[150ms]">
          <div className="flex justify-between mb-2">
            <p className="text-[.7rem]">
              {new Date(snippet.publishedAt).toDateString()}
            </p>
            <Link to={`/channel/${snippet?.channelId}`}>
              <p className="!grow-0">{snippet.channelTitle}</p>
            </Link>
          </div>
          <h2 className="card-title w-full">{snippet.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
