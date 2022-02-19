import React from "react";
import { Route, Routes } from "react-router-dom";

import Edit from "./TASKFEB-18/TASK1/Edit";
import Show from "./TASKFEB-18/TASK1/Show";
import TASK1 from "./TASKFEB-18/TASK1/TASK1";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TASK1 />} />
        <Route path="/show" element={<Show />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
