import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'


function VideoSidebar() {
    const [liked ,setLiked]=useState(false)
    return (
        <div className="videoSidebar" >
            <div className="videoSidebar__button">
                {
                    liked ?(
<FavoriteIcon
onClick={(e)=>setLiked(false)}
/>
                    ):(
<FavouriteBorderIcon
onClick={(e)=>setLiked(true)}
/>
                    )
                }
            
            <p>{liked ? 300 + 1 : 300}</p>
           
            </div>
            <div className="videoSidebar__button">
            
            <MessageIcon/>
            <p>230</p>
            
            </div>
            <div className="videoSidebar__button">
            
            <ShareIcon/>
            <p>10</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
