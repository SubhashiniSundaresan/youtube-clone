import {
  ExpandMoreOutlined,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Home' />
      <SidebarRow Icon={History} title='Trending' />
      <SidebarRow Icon={OndemandVideo} title='Subscription' />
      <SidebarRow Icon={WatchLater} title='Home' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='Trending' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Subscription' />
    </div>
  );
}

export default Sidebar;
