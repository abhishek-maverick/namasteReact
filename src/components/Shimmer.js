import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";
const Shimmer = () => {
  return (
    // <>
    //   <h1>Shimmer UI Loading .....</h1>
    // </>
    <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={2} gap={30} />
  );
};

export default Shimmer;
