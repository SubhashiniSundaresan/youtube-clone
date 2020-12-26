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
        image=''
        channel='Subhashini Sundaresan'
        verified
        subs=''
        noOfVideos={382}
        description="I'm not entitled"
      />
    </div>
  );
}

export default SearchPage;
