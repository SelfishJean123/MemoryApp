import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";
import activeTileReducer from "./activeTileReducer";

const rootReducer = combineReducers({
  scoreReducer,
  activeTileReducer,
});

export default rootReducer;
