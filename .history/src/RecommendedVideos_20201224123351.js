import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>RecommendedVideos</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
