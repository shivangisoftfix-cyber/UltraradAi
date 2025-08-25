import React from "react";

const Textmove = ({ text, textsize = "72px" }) => {
  return (
    <div className="inline-block">
      <h1
        style={{ fontSize: textsize }}
        className=" text-7xl font-bold uppercase tracking-widest text-transparent stroke-text group"
      >
        {text}
        {/* Overlay text */}
        <span
          className="absolute inset-0 text-red-600 overflow-hidden
          transition-all duration-500 ease-in-out  group-hover:w-full w-0"
        >
          {text}
        </span>
      </h1>
    </div>
  );
};

export default Textmove;
