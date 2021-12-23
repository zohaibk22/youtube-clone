import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = function (props) {
  const { videos, onVideoSelect } = props;
 
  const renderedVideos = videos.map((video)=> {
    return <VideoItem  onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
  });
  return (
    <div className='ui relaxed divided list'>
      <p>{videos.length}</p>
      {renderedVideos}
    </div>
  );
};

export default VideoList;

// VideoList.propTypes = {
//   videos: React.propArray.isRequired,
// }