import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";

const Wizapp = () => {
  return (
    <>
      <div
        style={{
          height: "160px",
          width: "100%",
          background: "rgba(37, 79, 111)",
          color: "white",
        }}
      >
        <h1>Wizard App</h1>

        <div style={{ display: "flex" }}>
          <button>
            <Link style={{ textDecoration: "none", color: "black" }} to="home">
              Home
            </Link>
          </button>
          <button>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/sample"
            >
              Sample
            </Link>
          </button>
          <button>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About
            </Link>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Wizapp;
