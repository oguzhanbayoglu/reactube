import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-[1px] border-gray-400 border-opacity-20 rounded-full bg-base-100 transition-colors duration-150"
      >
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search"
          className="input h-[2.3rem] w-[10rem] md:w-[20rem] lg:w-[30rem] rounded-full "
        />
        <button type="submit" className="mx-4">
          <RiSearchLine />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
