import { Avatar } from "@material-ui/core";
import React from "react";

function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <div className='videoCard'>
      <img src={image} alt=''></img>
      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' alt={channel}></Avatar>
        <div className='video__text'></div>
      </div>
    </div>
  );
}

export default VideoCard;
