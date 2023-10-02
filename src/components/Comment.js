import React from "react";

const Comment = ({ data }) => {
  // console.log(data);
  const { name, text, replies } = data;
  return (
    <div className="p-3 m-3 shadow-lg bg-gray-200">
      <div className="font-bold">{name}</div>
      <div>{text}</div>
      {replies?.length > 0 &&
        replies.map((reply) => {
          return (
            <div className="pl-5 border border-l-black ml-5" key={reply.name}>
              <Comment data={reply}></Comment>
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
