import React from "react";
import { Col, Row } from "react-bootstrap";

function VideoDetail() {
  
  const videoId = "zIY87vU33aA";
  const videoSource = `https://www.youtube.com/embed/${videoId}`


  return (
    <Row>
      <Col xs={12}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={videoSource}
            title="Video"
          >v</iframe>
        </div>
      </Col>
      <Col xs={12} className="border rounded m-1 p-2">
        <h4>Nombre Video</h4>
        <h4>Descripción Video</h4>
      </Col>
    </Row>
  );
}

export default VideoDetail;