import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  console.log(
    parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString("en-US")
  );
  console.log(channelDetail);
  return (
    <div className="card my-3 justify-center items-center w-[23rem]">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <figure className=" overflow-hidden rounded-full">
          <img
            src={channelDetail?.snippet?.thumbnails.high.url}
            alt="channel"
            className="h-44 rounded-full"
          />
        </figure>
        <div className="card-body bg-transparent transition-[background-color] duration-[150ms] justify-center items-center">
          <h2 className="card-title">{channelDetail?.snippet?.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
