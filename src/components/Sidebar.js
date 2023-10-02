import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div
      className={`p-5 shadow-lg  flex flex-col ${isMenuOpen ? "w-48" : "w-10"}`}
    >
      <section>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
      </section>
      <section>
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </section>
      <section>
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
