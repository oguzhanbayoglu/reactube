import React from "react";

//html parser...??

const Comments = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <>
          <h2 className="text-lg font-bold wra">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h2>
          <p className="mb-6 text-sm text-wrap">
            {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
          </p>
        </>
      ))}
    </div>
  );
};

export default Comments;
