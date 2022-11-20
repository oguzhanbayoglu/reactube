import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import {
  ChannelDetail,
  VideoDetails,
  SearchFeed,
  Navbar,
  Feed,
  Sidebar,
} from "./components";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="flex mt-4 relative">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<Feed selectedCategory={selectedCategory} />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
