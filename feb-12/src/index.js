import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
    ></link>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
