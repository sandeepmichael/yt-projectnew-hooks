import React from 'react'
import VideoItem from './VideoItem'

// here when we are taking the list of videos and passing to videoitem.js [so for every video inside here 
//we render one video item component]

const VideoList = props => {
const renderedlist = props.videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video = {video}/>
})


    return (
        <div className='ui relaxed divided list'>
            {renderedlist}
        </div>
    )
}
export default VideoList