import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZLZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>FirstName LastName</h2>
        <h4>user@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you</p>
          <p className="sidebar__statNumber">200</p>
        </div>
        <div className="sidebar__stat">
          <p> View on posts</p>
          <p className="sidebar__statNumber">199</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p> Recent </p>
        {recentItem("reactjs")}
        {recentItem("softwareengineering")}
        {recentItem("javascript")}
        {recentItem("nodejs")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
