import React from "react";
import { Route, Routes } from "react-router-dom";
import TASK1 from "./redux/TASK1Calculator";
// import TASK1 from "./redux/ADVANCE-TASK1/TASK1";
import TASK2 from "./redux/TASK2";
import RouterComponent from "./redux/TASK2/Router";

const App = () => {
  return (
    <>
      <TASK1 />
      {/* <Routes>
        <Route path="/" element={<TASK2 />} />
        <Route path="router" element={<RouterComponent />} />
      </Routes> */}
    </>
  );
};

export default App;
