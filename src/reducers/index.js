import { combineReducers } from "redux";
import { crudReducer } from "../reducers/crudReducer";

const reducer = combineReducers({
  crud: crudReducer,
});

export default reducer;
