import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {
 const [videos, setVideos] = useState([])
 const [selectedvideo, setSelectedVideo] = useState(null)

 useEffect(() => {
     onTermsubmit('cricket')
 }, [])

const onTermsubmit = async term => {
    const response = await youtube.get('/search', {
        params : {
            q : term
        }
    })
   setVideos(response.data.items)
   setSelectedVideo(response.data.items[0])
    }
    
   const onVideoSelect = video => {
        setSelectedVideo(video)
    
    }


    return (
        <div className='ui container'>
            <SearchBar onSubmitted={onTermsubmit}/>
            <div>
                <div className='ui row'>
                    <div className = 'sixteen wide column'>
                    <VideoDetail video={selectedvideo}/>
            </div>
            <div className='ten wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>

            </div>
            </div>
            </div>
        </div>
    )
}

   
   export default App;
