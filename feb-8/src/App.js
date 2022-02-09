import "./App.css";
import "./TASKFEB-8/Home.css";

import Home from "./TASKFEB-8/Home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./TASKFEB-8/About";

import Contact from "./TASKFEB-8/Contact";
import Userlist from "./TASKFEB-8/Userlist";
import Profile from "./TASKFEB-8/Profile";

const App = () => {
  return (
    <div>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
        <Link to="userlist">User</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/userlist" element={<Userlist />}></Route>
        <Route exact path="/profilepic/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
