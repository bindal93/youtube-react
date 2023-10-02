import React from "react";
import { Button } from "./Button";

const ButtonList = () => {
  const btnNameList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "News",
  ];
  return (
    <div className="flex">
      {btnNameList.map((btnName, index) => {
        return <Button name={btnName} key={index}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
