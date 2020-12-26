import React from "react";

function SidebarRow({ icon, title }) {
  return (
    <div className='sidebarRow'>
      <icon />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;
