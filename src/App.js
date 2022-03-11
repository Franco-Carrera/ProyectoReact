import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import CrudApi from "./components/CrudApi";

import store from "./store";

import ActivityMonth from "./components/ActivityMonth";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={CrudApi} />
          <Route exact path="/month" component={ActivityMonth} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
