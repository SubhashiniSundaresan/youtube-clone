import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
        channel='Subhashini Sundaresan'
        verified
        subs='450K'
        noOfVideos={382}
        description="I'm not entitled"
      />
    </div>
  );
}

export default SearchPage;
