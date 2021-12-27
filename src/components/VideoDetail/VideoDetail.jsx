import React from 'react'

const VideoDetail = ({ video }) => {
    console.log(video)
    // const selectedVideo 

    const videoTest = video ? 
    <div>
        <div className='ui embed'>
            <iframe title='video_player' src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
        </div>
        <div className='ui segment'>
            <h4 className = 'ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div> : '';

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
};

export default VideoDetail;