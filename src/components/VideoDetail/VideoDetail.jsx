import React from 'react'

const VideoDetail = ({ video }) => {
    console.log(video)
    const videoTest =  <div className='header'>{video && video.snippet.title}</div>
    {/* <p>{video !== null && ('nope')}</p> */}
    return(
        <div>
             {/* <img src={selectedVideo.snippet.thumbnails.large.url} className='ui image' />
            <div className="content">
                <div className='header'>{video.snippet.title}</div>
            </div> */}
            {videoTest}
        </div>
    )
}

export default VideoDetail;