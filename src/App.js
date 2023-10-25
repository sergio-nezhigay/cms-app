import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import TabContent from "./components/TabContent";

import tabs from "./data/tabs.json";

const sortedTabs = tabs.sort((a, b) => a.order - b.order);

function App() {
  return (
    <div>
      <ul>
        {sortedTabs.map(({ id, title }) => (
          <Link key={id} to={id}>
            {title}
          </Link>
        ))}
      </ul>

      <hr />

      <Routes>
        <Route index element={<TabContent path={sortedTabs[0].path} />} />
        {sortedTabs.map(({ id, path, title }) => (
          <Route
            key={id}
            path={id}
            element={<TabContent path={path} title={title} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
