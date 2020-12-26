import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Apps, Notifications, Search, VideoCall } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./Header.css";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/320px-Youtube.png'
          alt=''></img>
      </div>

      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder='Search'
          type='text'></input>
        <Search className='header__inputButton' />
      </div>
      <div className='header__icons'>
        <VideoCall className='header__icon' />
        <Apps />
        <Notifications />
        <Avatar
          alt='subhashini'
          src='https://yt3.ggpht.com/yti/ANoDKi4bv7sfd1_sBv-rZAj3JLY49-VUpVyAS2WmagLTqA=s108-c-k-c0x00ffffff-no-rj'
        />
      </div>
    </div>
  );
}

export default Header;
