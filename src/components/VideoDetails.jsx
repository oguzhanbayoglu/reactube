import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { useLocation } from "react-router-dom";

import { Videos, Loader } from "./";
import { fetchAPI } from "../utils/fetchAPI";
import Comments from "./Comments";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    fetchAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      setComments(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  console.log(comments);

  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden">
      <div>
        <div className="rounded-2xl overflow-hidden h-[12rem] md:h-[24rem] lg::w-[48rem] lg:h-[27rem] 2xl:w-[64rem] 2xl:h-[36rem]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex flex-col mt-8 gap-4">
          <img
            src={thumbnails.high.url}
            alt=""
            className="fixed top-16 h-[43rem] w-[80rem] object-cover -z-10 blur-3xl opacity-40"
          />
          <div className="flex justify-between">
            <h2 className="card-title w-[43rem]">{title}</h2>
            <Link to={`/channel/${channelId}`}>
              <p className="mr-4 card-title">{channelTitle}</p>
            </Link>
          </div>
          <div>
            <p>{parseInt(viewCount).toLocaleString()} views</p>
            <p>{parseInt(likeCount).toLocaleString()} likes</p>
            <div className="2xl:w-[60rem] w-[45rem] mt-8">
              <h2 className="text-xl text-red-500 font-bold mb-4">Comments</h2>
              <Comments comments={comments} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-start">
        <Videos videos={videos} direction="column" />
      </div>
    </div>
  );
};

export default VideoDetails;
