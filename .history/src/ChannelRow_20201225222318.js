import React from "react";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className='ChannelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={image} />
      <div className='channelRow__text'>
        <h4>{channel}</h4>
      </div>
    </div>
  );
}

export default ChannelRow;
