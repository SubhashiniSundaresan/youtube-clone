import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} &#8729;
          <span className='videoRow__subs'>
            <span className='videoRow__subsNumber'>{subs}</span> Subscribers
          </span>
          {views} views &#8729; {timestamp}
        </p>
        <p className='videoRow__descritpion'>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
