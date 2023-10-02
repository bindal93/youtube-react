import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchCache]);
      } else {
        getSearchResult();
      }
    }, 200);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchResult = async () => {
    const url = "https://corsproxy.io/?" + YOUTUBE_SEARCH_API + searchQuery;
    console.log(url);
    const data = await fetch(url);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResult({ key: searchQuery, value: json[1] || [] }));
  };
  return (
    <div className="flex align-middle justify-evenly p-2 m-2 shadow-lg">
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
      <div className="flex-grow">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setSuggestions([])}
          />
          <button
            type="button"
            className="border border-gray-400 bg-gray-400 p-2 rounded-r-full"
          >
            search
          </button>
        </div>
        {suggestions?.length > 0 && (
          <div className="fixed bg-white w-96 border border-gray-200 shadow-lg ml-1 rounded-xl">
            <ul className="">
              {suggestions.map((suggestion) => {
                return (
                  <li
                    className="p-2 shadow-sm hover:bg-gray-200"
                    key={suggestion}
                  >
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
