import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";

import tabs from "./data/tabs.json";
import "bootstrap/dist/css/bootstrap.min.css";

const sortedTabs = tabs.sort((a, b) => a.order - b.order);

const App = () => {
  return (
    <>
      <header>
        <Header tabs={sortedTabs} />
      </header>
      <main>
        <MainContent tabs={sortedTabs} />
      </main>
    </>
  );
};

export default App;
