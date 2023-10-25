# 🚀 Simple CMS Application

![Simple CMS Application](/public/screenshot.jpg)

This repository contains a client-side application that works as a basic Content Management System (CMS) using React, React Router, and Webpack. The app loads tabs from a JSON file and renders their content. 🚀

## App Functionality 📋

- When the app starts, it downloads a JSON file from a predefined path. This JSON file contains tab descriptions to be rendered within the app.
- A tab's description includes:
  - `id`: A unique identifier for the tab.
  - `title`: The title of the tab.
  - `order`: The sequence order of the tab among others.
  - `path`: The path to a JS file containing a React component to be rendered as the tab's content.

Example JSON file (`tabs.json`):

```json
[
  {
    "id": "dummyTable",
    "title": "Dummy Table",
    "order": 1,
    "path": "tabs/dummyTable.js"
  },
  {
    "id": "dummyChart",
    "title": "Dummy Chart",
    "order": 2,
    "path": "tabs/dummyChart.js"
  },
  {
    "id": "dummyList",
    "title": "Dummy List",
    "order": 0,
    "path": "tabs/dummyList.js"
  }
]
```

Example tab content file (`dummyTable.js`):

```jsx
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
```

## Specs 📝

- When switching between tabs, the current tab's `id` is added to the URL of the app. For example, 'localhost/dummyTable' or 'localhost/dummyChart'.
- The first tab is opened by default.
- If the app's URL already contains a tab `id` when loaded, that tab is opened by default.
- Implemented lazy loading for tab content files. The file for the tab's content (identified with the "path" property) is loaded only when it is needed.

## Additional Information ℹ️

**Used Libraries**:

- "bootstrap": 📦
- "chart.js": 📈
- "react": ⚛️
- "react-dom": ⚛️
- "react-bootstrap": 🔳
- "react-chartjs-2": 📊
- "react-router-dom": "🛣️

For more information or assistance, please refer to the Backendless team. 📧

**Note:** Please make sure to keep the project clean and well-organized. Consider adding any necessary documentation, comments, or instructions for running the application.

## Contact Information

- **Author:** [Serhii Nezhyhai](https://github.com/sergio-nezhigay) 📝
- **Email:** [abc1971h@gmail.com](mailto:abc1971h@gmail.com) ✉️
- **My portfolio:** [🌐 Website](https://serhii.vercel.app/)
