import React from "react";

export default function Button({ buttonText="",className="",selected=false ,...props}) {
  return (
    <button
      className={`border-2 border-black p-2 ${selected?"bg-white text-black":"bg-black text-[white]"}   rounded-4xl cursor-pointer min-w-[100px]`}

      {...props}
    >
      {buttonText}
    </button>
  );
}
