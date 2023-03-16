import React from "react";
import LoadingGif from "../assets/loading.gif";
import "./Loading.css";

export function Loading() {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="loading gif"></img>
    </div>
  );
}
