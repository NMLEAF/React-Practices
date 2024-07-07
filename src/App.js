import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import Split from "./components/eat-n-split/Split";
import FarAway from "./components/FarAway/FarAway";
import TestStarRating from "./components/StarRating/TestStarRating";
import Pagination from "./components/Pagination/Pagination";
import TestTextExpander from "./components/TextExpander/TestTextExpander";

function App() {
  return (
    <>
      {/*      1ST MINI - PROJECT         */}
      <FarAway />

      {/*     2ND MINI - PROJECT          */}
      <Accordion />

      {/*     3RD MINI - PROJECT          */}
      <Split />

      {/*     4th MINI - PROJECT          */}
      <TestStarRating />

      {/*     5th MINI - PROJECT          */}
      <Pagination />

      {/*     6th MINI - PROJECT          */}
      <TestTextExpander />
    </>
  );
}

export default App;
