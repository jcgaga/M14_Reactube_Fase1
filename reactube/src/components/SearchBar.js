import React from "react";
import { Form } from "react-bootstrap";

function SearchBar() {
  return (
    <Form.Group>
      <Form.Label className="font-weight-bold">Video Search</Form.Label>
      <Form.Control type="text" placeholder="Search..." />
    </Form.Group>
  );
}

export default SearchBar;
