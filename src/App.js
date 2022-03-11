import { Provider } from "react-redux";

import CrudApi from "./components/CrudApi";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <CrudApi />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
