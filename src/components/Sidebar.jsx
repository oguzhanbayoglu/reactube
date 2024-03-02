import React from "react";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const nav = useNavigate();

  return (
    <div className="sidebar">
      <div className="mx-4 flex flex-col gap-2  left-0 sticky top-[5rem] hover:w-36 group ">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setSelectedCategory(cat.name);
              console.log("click");
              nav("reactube");
            }}
            className="catBtn flex lg:w-36 hover:w-36 items-center p-2 hover:bg-red-600 group rounded-full transition-all duration-150"
          >
            <span className="text-red-500 ml-1">{cat.icon}</span>
            <span className="ml-4 font-bold group-hover:block lg:block hidden catName">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
