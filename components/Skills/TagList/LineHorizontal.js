import * as React from "react";

const LineHorizontal = ({
  side,
  width,
  backgroundColor,
  height,
  borderRadius,
  skew,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        height: height,
        width: width,
        [side]: 0,
        left: "50%",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        transform: `skew(${skew}) translateX(-50%)`,
        boxShadow: `0 0 13.1544px ${backgroundColor}, 0 0 3.7584px ${backgroundColor}, 0 0 1.8792px ${backgroundColor}`,
      }}
    ></div>
  );
};

export default LineHorizontal;
