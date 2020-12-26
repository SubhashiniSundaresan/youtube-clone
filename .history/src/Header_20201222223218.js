import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className='header'>
      <p>I'm a Header</p>
      <MenuIcon />
      <img
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png'
        alt=''></img>
    </div>
  );
}

export default Header;
