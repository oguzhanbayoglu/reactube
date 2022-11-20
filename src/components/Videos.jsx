import React from "react";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  console.log(videos);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {videos?.map((video, i) => (
        <div key={i}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
