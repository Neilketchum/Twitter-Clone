import React,{ useState,useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase';
import FlipMove from 'react-flip-move'
export default function Feed() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    }, [])
    return (
        <div className = 'feed'>
            <div className="feedHeader">
             <h3>Home</h3>
            </div>
        {/* TweetBox */}
        <TweetBox></TweetBox>

        {/* Post */}
        <FlipMove>
        {posts.map(post=>(
                  <Post displayName = {post.displayName}
                  key   = {post.text}
                  userName = {post.userName} 
                  verified = {post.verified} 
                  text  = {post.text} 
                  image  = {post.image}
                  avatar  = {post.avatar}
                  ></Post> 
        ))}
        </FlipMove>
   
            
        </div>
    )
}
