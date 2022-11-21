import React from "react";
import { FlexContent, Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data.js";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent />
      </main>
    </>
  );
};

export default App;
