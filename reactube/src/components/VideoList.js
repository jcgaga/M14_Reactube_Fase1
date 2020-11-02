import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    console.log(video);
    return (
      <Col xs={12}>
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
        <h6>Title: {video.snippet.title}</h6>
        <h6>VideoId: {video.id.videoId}</h6>
        <h6>URL: {video.snippet.thumbnails.default.url}</h6>
        <hr size="2px" color="silver"/>
      </Col>
    );
  });

  return <Row>{renderedVideos}</Row>;
};

export default VideoList;
