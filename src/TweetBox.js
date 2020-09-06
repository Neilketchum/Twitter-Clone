import React from 'react';
import './TweetBox.css';
import { Avatar,Button } from '@material-ui/core';
function TweetBox() {
    return (
        <div className = 'tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar   src = 'https://previews.123rf.com/images/sparkstudio/sparkstudio1208/sparkstudio120802212/14917496-a-graphical-portrait-of-a-man.jpg'></Avatar>
                    <input  placeholder = 'Whats Happening ? ' type="text"/>
                </div>
                    <input  placeholder = 'Optional Enter Image Url ' type="text" className = "tweetBox_InputImage"/>
                <Button className = 'TweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
