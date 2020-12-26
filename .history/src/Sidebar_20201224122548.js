import { Link } from "@material-ui/core";
import {
  ExpandMoreOutlined,
  History,
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
  var sidebarLinks = [{ icon: Home, title: "Home" }];
  const listItems = sidebarLinks.map((link) => (
    <SidebarRow selected Icon={link.icon} title={link.title} />
  ));
  return (
    <div className='sidebar'>
      {listItems}
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Library' />
      <SidebarRow Icon={History} title='History' />
      <SidebarRow Icon={OndemandVideo} title='Your videos' />
      <SidebarRow Icon={WatchLater} title='Watch Later' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='Liked Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Show More' />
    </div>
  );
}

export default Sidebar;
