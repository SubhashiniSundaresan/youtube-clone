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
          channelImage='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
          image='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
          channel='Subhashini Sundaresan'
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
