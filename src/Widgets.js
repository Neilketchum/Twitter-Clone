import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
export default function Widgets() {
    return (
        <div className = 'widgets'>
            <div className="widgets__input">
                <SearchIcon className = "widgets_searchIcon">
                    <h2>What Happening ?</h2>
                </SearchIcon>
            </div>
        </div>
    )
}
