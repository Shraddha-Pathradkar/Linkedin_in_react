import { Avatar } from "@mui/material";
import React from "react";
import Images from "../../Images/Images";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p> {topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Images.profileBackground} alt="" />
        <Avatar className="sidebar__avatar" src={Images.Avatar} />
        <h2>Shraddha Pathradkar</h2>
        <h4>shraddhapathradkar9@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,234</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>recents</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("web development")}
        {recentItems("software engineering")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
