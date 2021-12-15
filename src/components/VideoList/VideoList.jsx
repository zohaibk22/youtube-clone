import React from 'react';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = function (props) {
  const { videos } = props;

  const renderedVideos = videos.map((video)=> {
    return <VideoItem video={video} />
  });
  console.log(videos, "videoes");
  return (
    <div>
      <p>{videos.length}</p>
      {renderedVideos}
    </div>
  );
};

export default VideoList;

// VideoList.propTypes = {
//   videos: React.propArray.isRequired,
// }