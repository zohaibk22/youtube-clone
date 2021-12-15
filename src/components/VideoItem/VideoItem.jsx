import React from 'react';

const VideoItem = ({video}) => {
    // const {}
    return (
        <>
        <img src={video.snippet.thumbnails.medium.url} />
            <div>{video.snippet.title}</div>
        </>
    )

}

export default VideoItem;