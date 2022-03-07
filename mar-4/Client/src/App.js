import axios from "axios";

function App() {
  const CALL = async () => {
    let res = await axios("/r");
    console.log("RES is :", res);
  };
  CALL();

  return <>HEy</>;
}

export default App;
