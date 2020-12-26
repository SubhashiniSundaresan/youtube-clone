import { Home, Subscriptions, Whatshot } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow icon={Home} title='Home' />
      <SidebarRow icon={Whatshot} title='Trending' />
      <SidebarRow icon={Subscriptions} title='Subscription' />
    </div>
  );
}

export default Sidebar;
