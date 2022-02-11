import "./TASKFEB-10/App1.css";
import { Routes, Route, Link } from "react-router-dom";
import Stuff from "./TASKFEB-10/Stuff";
import Contact from "./TASKFEB-10/Contact";
import Home from "./TASKFEB-10/Home";
import User from "./TASKFEB-10/User";
import Product from "./TASKFEB-10/Product";
import Group from "./TASKFEB-10/Group";
import EditUser from "./TASKFEB-10/EditUser";
import EditProduct from "./TASKFEB-10/EditProduct";
import EditGroup from "./TASKFEB-10/EditGroup";

const App = () => {
  return (
    <div class="app1">
      <h1>Simple SPA</h1>
      <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/user">User</Link>
        <Link to="/group">Group</Link>
        <Link to="/stuff">Header</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stuff" element={<Stuff />} />
        <Route path="/showuserlist" element={<EditUser />} />
        <Route path="/user" element={<User />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/showproductlist" element={<EditProduct />} />
        <Route path="/showgrouplist" element={<EditGroup />} />

        <Route path="/group" element={<Group />} />

        {/* <Route path="/group" element={<Group />} />
        <Route path="/group" element={<Group />} /> */}
      </Routes>
    </div>
  );
};

export default App;
