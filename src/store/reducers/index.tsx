import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";
import tileReducer from "./tileReducer";

const rootReducer = combineReducers({
  scoreReducer,
  tileReducer,
});

export default rootReducer;
