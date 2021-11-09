import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Images from "../Images/Images";
import HeaderRight from "./Header_Right/HeaderRight";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Images.linkedInIcon} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderRight Icon={HomeIcon} title="Home" />
        <HeaderRight Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderRight Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderRight Icon={TextsmsIcon} title="Messages" />
        <HeaderRight Icon={NotificationsIcon} title="Messages" />
        <HeaderRight avatar={Images.Avatar} title="Me" />
      </div>
    </div>
  );
};
export default Header;
