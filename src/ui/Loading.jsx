import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <ThreeDots
      height={40}
      width={40}
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      color="rgb(var(--color-primary-900))"
    />
  );
}

export default Loading;
