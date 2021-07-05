import React from 'react';

const VideoDetails=({selectvideo})=>{
    if(!selectvideo)
    {
        return<div>Loading......</div>;
    }
    const videoSrc=`https://www.youtube.com/embed/${selectvideo.id.videoId}`;
    return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{selectvideo.snippet.title}</h4>
                    <p>{selectvideo.snippet.description}</p>
                    
                </div>
               
                
            </div>
    );
}

export default VideoDetails;