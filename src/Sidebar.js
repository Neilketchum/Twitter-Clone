import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button"
export default function Sidebar() {
    return (
        <div className = 'sidebar'>
            {/* Twitter Icon */}
            <TwitterIcon className = "sidebar_twitterIcon"></TwitterIcon>
            {/* SidebarOption */}
            <SidebarOptions active = {true} Icon={HomeIcon} text="Home" />
            <SidebarOptions active = {false} Icon={SearchIcon} text="Explore" />
            <SidebarOptions active = {false} Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOptions active = {false} Icon={MailOutlineIcon} text="Messages" />
            <SidebarOptions active = {false} Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOptions active = {false} Icon={ListAltIcon} text="Lists" />
            <SidebarOptions active = {false} Icon={PermIdentityIcon} text="Profile" />
            <SidebarOptions active = {false} Icon={MoreHorizIcon} text="More" />
            {/* Button ->Tweet */}
            <Button variant = "outline" className = "sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}
