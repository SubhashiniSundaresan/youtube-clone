import { Avatar } from "@material-ui/core";
import { VerifiedUser, VerifiedUserOutlined } from "@material-ui/icons";
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
        <h4>
          {channel} {verified && <VerifiedUserOutlined />}
        </h4>
        <p>
          {subs} subscribers &#8729; {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
