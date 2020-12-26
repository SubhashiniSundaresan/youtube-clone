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
  var sidebarLinks = [
    { icon: VideoLibrary, title: "Library" },
    { icon: History, title: "History" },
    { icon: OndemandVideo, title: "Your videos" },
    { icon: WatchLater, title: "Watch Later" },
    { icon: ThumbUpAltOutlined, title: "Liked Videos" },
    { icon: ExpandMoreOutlined, title: "Show More" },
  ];
  const listItems = sidebarLinks.map((link) => (
    <SidebarRow Icon={link.icon} key={link.title} title={link.title} />
  ));
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <hr />
      {listItems}
    </div>
  );
}

export default Sidebar;
