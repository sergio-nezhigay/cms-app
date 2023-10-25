import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const DummyList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item
          key={index}
          className={index % 2 === 0 ? "even-item" : "odd-item"}
        >
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DummyList;
