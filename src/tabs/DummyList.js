import React from "react";

const DummyList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;
