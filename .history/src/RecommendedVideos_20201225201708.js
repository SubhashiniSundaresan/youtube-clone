import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>RecommendedVideos</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Become a Web Developer in 10 minutes'
          views='2.3M Views'
          timestamp='3 days ago'
          channelImage
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
