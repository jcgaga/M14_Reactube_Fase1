import React from "react";
import { Row } from "react-bootstrap";
import VideoItem from "./VideoItem";

function VideoList() {
  return (
    <Row>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </Row>);
}

export default VideoList;
