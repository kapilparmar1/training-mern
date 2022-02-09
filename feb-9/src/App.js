import "./TASKFEB-9/App1.css";

import { Routes, Route, Link } from "react-router-dom";
import Stuff from "./TASKFEB-9/Stuff";
import Contact from "./TASKFEB-9/Contact";
import Home from "./TASKFEB-9/Home";

function App() {
  return (
    <div class="app1">
      <h1>Simple SPA</h1>
      <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="stuff">Stuff</Link>
        <Link to="contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="stuff" element={<Stuff />} />
      </Routes>
    </div>
  );
}

export default App;
