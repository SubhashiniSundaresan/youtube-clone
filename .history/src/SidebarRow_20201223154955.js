import React from "react";

function SidebarRow({ Icon, title }) {
  return (
    <div className='sidebarRow'>
      <Icon className='sidebarRow__icon' />
      <h2 className='sidebarRow__icon'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
