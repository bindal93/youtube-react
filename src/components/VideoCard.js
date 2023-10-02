import React from "react";

export const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-2xl bg-gray-100 w-[300px]">
      <img
        src={thumbnails}
        alt="thumbnail"
        className="rounded-lg w-[300px] h-[150px]"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};
