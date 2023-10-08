import React, { memo, useState } from "react";

const Demo = memo(() => {
  const [text, setText] = useState("");
  console.log("re-render");
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <input
          className="border border-black m-2 p-2 w-72"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
});

export default Demo;
