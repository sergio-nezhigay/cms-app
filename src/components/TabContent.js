import React, { lazy, Suspense } from "react";

const TabContent = ({ path, title }) => {
  const TabComponent = lazy(() => import(`../${path}`));

  return (
    <div className="container">
      <div className="row h-50">
        <div className="col-12">
          <h1>{title}</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <TabComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
