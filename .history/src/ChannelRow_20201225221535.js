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
      <Avatar
        className='videoCard__avatar'
        alt={channel}
        src={channelImage}></Avatar>
    </div>
  );
}

export default ChannelRow;
