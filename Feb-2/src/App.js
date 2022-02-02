import { useState } from "react";
import "./App.css";
import FOOTER from "./Foot";

import PRODUCT from "./product";
import USER from "./user";

const App = () => {
  const [user, setUser] = useState(false);
  const [Product, setProduct] = useState(false);
  return (
    <>
      <div style={{ "margin-left": "200px", marginTop: "10px" }}>
        <div>
          <button
            onClick={() => {
              setProduct(true);
              setUser(false);
            }}
          >
            Show Product
          </button>
          <button
            onClick={() => {
              setProduct(false);
              setUser(true);
            }}
          >
            Show User
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          {Product ? (
            <PRODUCT />
          ) : user ? (
            <USER />
          ) : (
            "Click To See The Information"
          )}
        </div>
        <div style={{ marginTop: "180px", "margin-left": "50px" }}>
          <FOOTER />
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <Test />
  //   </>
  // );
};

export default App;
