import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videosArray,onVideoSelect})=>//destucture props.videos
{
    //we can use map function here so we can get array of videos and according to that we can access single video in videoItem

    const renderVideos=videosArray.map(video=>{
        //we are passing video as props to videoitem which can all videos
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

    //we can access all videos by using props.videos
    return <div className="ui relaxed divided list">{renderVideos}</div>;
    
};

export default VideoList;