import store from "./Component/redux/store/store";
import Home from "./Component/Home";

function App() {
  console.log(store.getState());
  return (
    <>
      <Home />
    </>
  );
}

export default App;
