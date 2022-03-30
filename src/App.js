import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import ActivityApi from "./components/ActivityApi";
import CrudApi from "./components/CrudApi";
import CurrentMonth from "./components/CurrentMonth";

import store from "./store";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ActivityApi} />

          <Route exact path="/stadistics" component={CrudApi} />
          <Route path="/itemMonth/:id" component={CurrentMonth} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
