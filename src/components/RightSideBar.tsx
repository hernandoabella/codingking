import React from "react";

const RightSideBar = () => {
  return (
    <div
      className="bg-neutral-content
    p-10 h-full right-side-bar fixed right-0"
    >
      <h3 className="font-bold">Related content</h3>
      <ul className="pl-5">
        <li>Clean Code</li>
        <li>Algorithms and Data Structure</li>
      </ul>
    </div>
  );
};

export default RightSideBar;