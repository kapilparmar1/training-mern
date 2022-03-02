import "./App.css";
import Wizapp from "./Components/Wizapp";
import { Link, Routes, Route } from "react-router-dom";
import Home, { Step1, Step2, Step3, Step4, Step5 } from "./Components/Home";
import Sample from "./Components/Sample";
import About from "./Components/About";
import Error from "./Components/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wizapp />}>
          <Route path="home" element={<Home />} />
          <Route path="sample" element={<Sample />} />
          <Route path="about" element={<About />} />

          <Route exact path="/step1" element={<Step1 />} />
          <Route exact path="/step2" element={<Step2 />} />
          <Route exact path="/step3" element={<Step3 />} />
          <Route exact path="/step4" element={<Step4 />} />
          <Route exact path="/step5" element={<Step5 />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
