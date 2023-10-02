import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex align-middle justify-between p-2 m-2 shadow-lg">
      <div className="flex align-middle justify-between mr-10 pr-10">
        <img
          className="w-[50px] h-[50px] p-2 m-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src={
            "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          }
        />
        <Link to="/">
          <img
            className="w-[100px] h-[70px] cursor-pointer"
            alt="menu"
            src={
              "https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            }
          />
        </Link>
      </div>
      <div className="flex align-middle flex-grow">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button
          type="button"
          className="border border-gray-400 bg-gray-400 p-2 rounded-r-full"
        >
          search
        </button>
      </div>
      <div className="flex justify-between align-middle">
        <button
          type="button"
          className="bg-green-500 p-2 rounded-xl m-2 h-[40px]"
        >
          User
        </button>
      </div>
    </div>
  );
};

export default Header;
