import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "myClass",
    style: { color: "red", background: "black", fontSize: "80px" },
  },
  "Namaste Everyone for Parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "myClass",
    style: { color: "red", background: "black", fontSize: "80px" },
  },
  "This is heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
