import React, { lazy, Suspense } from "react";

const TabContent = ({ path, title }) => {
  const TabComponent = lazy(() => import(`../${path}`));

  return (
    <div>
      <h1>{title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TabComponent />
      </Suspense>
    </div>
  );
};

export default TabContent;
