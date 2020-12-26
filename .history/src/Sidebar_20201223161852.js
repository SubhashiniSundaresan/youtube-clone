import { Home, Subscriptions, Whatshot } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
    </div>
  );
}

export default Sidebar;
