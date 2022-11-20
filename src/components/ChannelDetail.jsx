import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchAPI } from "../utils/fetchAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center relative w-full">
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          className="absolute top-0 lef-0 -z-10 w-full blur-3xl opacity-20"
          alt="channel"
        />
        <div className="mt-16">
          <ChannelCard channelDetail={channelDetail} />
        </div>
        <p className="-mt-12 mb-12">
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            "en-US"
          )}
          <span className="ml-2">Subscribers</span>
        </p>
      </div>
      <Videos videos={videos} />
    </div>
  );
};

export default ChannelDetail;
