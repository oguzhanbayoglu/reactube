import React from "react";
let arr = new Array(50).fill("a");

const Loader = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {arr.map(() => (
        <div className="card card-compact w-[20.3rem]">
          <figure className="h-[12.9rem] rounded-2xl overflow-hidden bg-gray-400 opacity-30" />

          <div className="card-body -ml-4">
            <div className="w-[12.9rem] h-4 rounded-2xl overflow-hidden bg-gray-400 opacity-30" />
            <div className="w-[8rem] h-4 rounded-2xl overflow-hidden bg-gray-400 opacity-30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
