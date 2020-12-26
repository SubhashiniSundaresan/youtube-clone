import React from "react";

function VideoRow(views, subs, description, timestamp, channel, title, image) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <h3></h3>
      </div>
    </div>
  );
}

export default VideoRow;
