import React, { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";
import { Videos } from "./";

const Feed = ({ selectedCategory }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
    console.log(videos);
  }, [selectedCategory]);

  return (
    <div>
      <h2 className="text-3xl font-bold mx-8 mb-8">
        <span className="text-red-500">{selectedCategory}</span>{" "}
        <span>videos</span>
      </h2>
      <Videos videos={videos} />
    </div>
  );
};

export default Feed;
