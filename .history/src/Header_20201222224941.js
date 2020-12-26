import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Menu";
import { Apps, Notifications, Search, VideoCall } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./Header.css";
function Header() {
  return (
    <div className='header'>
      <MenuIcon />
      <img
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/320px-Youtube.png'
        alt=''></img>
      <input type='text'></input>
      <Search />
      <VideoCall />
      <Apps />
      <Notifications />
      <Avatar
        alt='subhashini'
        src='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
      />
    </div>
  );
}

export default Header;
