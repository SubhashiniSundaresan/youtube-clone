import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'></div>
      <TuneOutlined />
      <h2>FILTER</h2>
    </div>
  );
}

export default SearchPage;
