import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
export default function Feed() {
    return (
        <div className = 'feed'>
            <div className="feedHeader">
             <h3>Home</h3>
            </div>
        {/* TweetBox */}
        <TweetBox></TweetBox>

        {/* Post */}
        <Post></Post>
        <Post></Post>
        <Post></Post>
        
        </div>
    )
}
