import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className='header'>
      <p>I'm a Header</p>
      <MenuIcon />
      <img className='header__logo' src='./images/youtube.svg' alt=''></img>
    </div>
  );
}

export default Header;
