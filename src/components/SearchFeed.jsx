import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchAPI } from "../utils/fetchAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div>
      <p className="text-3xl font-bold mx-8 mb-8">
        Search Results for <span className="text-red-500">{searchTerm}</span>{" "}
        videos
      </p>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
