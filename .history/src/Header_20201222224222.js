import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Menu";
import { Notifications, Search, VideoCall } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className='header'>
      <p>I'm a Header</p>
      <MenuIcon />
      <img
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/320px-Youtube.png'
        alt=''></img>
      <input type='text'></input>
      <Search />
      <VideoCall />
      <Notifications />
      <Avatar
        alt='subhashini'
        src='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
      />
    </div>
  );
}

export default Header;
