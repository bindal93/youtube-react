import React from "react";

export const Button = ({ name }) => {
  return (
    <div>
      <button type="button" className="bg-gray-200 px-5 py-2 m-3 rounded-lg">
        {name}
      </button>
    </div>
  );
};
