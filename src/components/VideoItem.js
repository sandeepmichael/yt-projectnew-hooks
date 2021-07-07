import './VideoItem.css'
import React from 'react'

// so eventually we see here 5 video items....

const VideoItem = props => {

 function onClickhandler() {
    props.onVideoSelect(props.video)
}


    return (
        
        
        <div onClick={onClickhandler} className='video-item item'>
                 <img className='ui image' alt={props.video.snippet.title} 
                  src={props.video.snippet.thumbnails.medium.url} />

        <div className='content'>
        <div className='header'>{props.video.snippet.title}</div>
        </div>
         
        </div>
    )
}
export default VideoItem