import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
function Post() {

    return (
        <div className = "post">
            <div className="post__avatar">
                <Avatar src = "https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/84334520_2663873317000396_715512057973178368_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=fHJqITCyJAYAX85BAzP&_nc_ht=scontent.fpnq2-1.fna&oh=107d9b9844f3a40a14cb63cb4df86bec&oe=5F7ACC73" ></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Daipayan Hati <span> <VerifiedUserIcon className="post__headerSpecial"></VerifiedUserIcon></span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  ex inventore?</p>
                    </div>
                    <img className = "post__Img" src="https://media.tenor.com/images/124f4df737c3709122d370d904961f03/tenor.png" alt="" srcset=""/>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
