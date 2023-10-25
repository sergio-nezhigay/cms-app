import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TabContent from "./TabContent";

const MainContent = ({ tabs }) => {
  return (
    <>
      {tabs.length ? (
        <Routes>
          <Route index element={<Navigate to={tabs[0].id} />} />
          {tabs.map(({ id, path, title }) => (
            <Route
              key={id}
              path={id}
              element={<TabContent path={path} title={title} />}
            />
          ))}
        </Routes>
      ) : (
        <h1>Tabs description file not found...</h1>
      )}
    </>
  );
};

export default MainContent;
