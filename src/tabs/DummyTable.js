import React from "react";
import Table from "react-bootstrap/Table";

const DummyTable = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </Table>
);

export default DummyTable;
