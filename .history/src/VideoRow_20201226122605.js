import React from "react";

function VideoRow(views, subs, description, timestamp, channel, title, image) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p>
          {channel} &#8729; {subs} Subscribers
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
