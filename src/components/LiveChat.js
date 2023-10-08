import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const handleLiveMessage = (event) => {
    event.preventDefault();
    dispatch(
      addMessage({
        id: "dum1" + Math.random().toFixed(5) * 100000,
        name: "dumaa1" + Math.random().toFixed(5) * 100000,
        message: liveMessage
      })
    );
    setLiveMessage("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("testing API call");
      dispatch(
        addMessage({
          id: "dum1" + Math.random().toFixed(5) * 100000,
          name: "dumaa1" + Math.random().toFixed(5) * 100000,
          message: "lorem ipsum ssaass" + new Date().toISOString()
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-full ml-2 p-2 border border-black h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((data) => {
          return <ChatMessage {...data} key={data.id}></ChatMessage>;
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => handleLiveMessage(e)}
      >
        <input
          type="text"
          className="flex-grow"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button type="submit" className="px-2 mx-2 bg-green-100">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
