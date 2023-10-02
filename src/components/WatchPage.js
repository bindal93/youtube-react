import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  let videoId = searchParams.get("v");
  videoId = "ddBooxrxp10?si=WoibDvMm67ZrU5hf";
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col">
      <div className="p-5">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer></CommentsContainer>
    </div>
  );
};
