import react, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count > 2) {
            setCount(1);
          }

          console.log(count);
        }}
      >
        Switch
      </button>
      {count == 1 ? <App1 /> : ""}
      {count == 2 ? <App2 /> : ""}
      {count == 3 ? <App3 /> : ""}
    </>
  );
};

class App1 extends react.Component {
  render() {
    return (
      <>
        <h1>This is component 1 </h1>
      </>
    );
  }
}
class App2 extends react.Component {
  render() {
    return (
      <>
        <h1>This is component 2 </h1>
      </>
    );
  }
}
class App3 extends react.Component {
  render() {
    return (
      <>
        <h1>This is component 3 </h1>
      </>
    );
  }
}

export default App;
