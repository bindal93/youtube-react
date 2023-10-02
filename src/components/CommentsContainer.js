import React from "react";
import commentData from "../utils/commentData.json";
import Comment from "./Comment";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {commentData?.length > 0 &&
        commentData.map((comment) => {
          return <Comment data={comment} key={comment.name}></Comment>;
        })}
    </div>
  );
};

export default CommentsContainer;
