import React,{useState,useEffect } from 'react';
import './TweetBox.css';
import { Avatar,Button } from '@material-ui/core';
import db from './firebase';
function TweetBox() {
    const [tweetMessage,setTweetMessage]  = useState("");
    const [tweetImage,setTweetImage]  = useState("");
     function sendTweet(e){
        e.preventDefault();
         db.collection('posts').add({
            displayName:'Daipayan Hati',
            userName:"Neilketchum",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:'https://previews.123rf.com/images/sparkstudio/sparkstudio1208/sparkstudio120802212/14917496-a-graphical-portrait-of-a-man.jpg'
        },)
        setTweetMessage("")
        setTweetImage("")
    }
    console.log(tweetMessage)
    return (
    
        <div className = 'tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar    src = 'https://previews.123rf.com/images/sparkstudio/sparkstudio1208/sparkstudio120802212/14917496-a-graphical-portrait-of-a-man.jpg'></Avatar>
                    <input  onChange = {(e) => setTweetMessage(e.target.value)} placeholder = 'Whats Happening ? ' type="text"/>
                </div>
                    <input  onChange  = {(e)=>setTweetImage(e.target.value)} placeholder = 'Optional Enter Image Url ' type="text" className = "tweetBox_InputImage"/>
                <Button onClick = {sendTweet} className = 'TweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
