import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";

const reducer = combineReducers({
  crud: crudReducer,
});

export default reducer;
//saque cart y tira error line 90 crudReducer
