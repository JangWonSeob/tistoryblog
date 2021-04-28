import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTItle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTItle, [title]);
  return setTitle;
};

const Tabs = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="Tabs">
      <div></div>
    </div>
  );
};

export default Tabs;