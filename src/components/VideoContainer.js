import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import videoMockData from "../utils/videoMockData.json";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    // const json = await data.json();
    const json = videoMockData;
    // console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} key={video.id}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
