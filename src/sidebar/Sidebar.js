import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.homestratosphere.com/wp-content/uploads/2019/07/trees-july192019-min.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Wiews on posts</p>
          <p className="sidebar__statNumber">1,876</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("angular")}
        {recentItem("mernstack")}
        {recentItem("asp.netcore")}
        {recentItem("reactnative")}
        {recentItem("xamarinofficial")}
        {recentItem("softwaredevs")}
      </div>
    </div>
  );
};

export default Sidebar;
