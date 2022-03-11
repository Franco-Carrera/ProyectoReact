import { Provider } from "react-redux";

import CrudApi from "./components/CrudApi";
//import ShoppingCart from "./components/ShoppingCart";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <CrudApi />
        <hr />
        {/* <ShoppingCart /> */}
      </div>
    </Provider>
  );
}

export default App;
