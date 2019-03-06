import { combineReducers } from "redux";
import globalLoadingBar from "./components/loading-indicators/global-loading-bar.reducer";

const rootReducer = combineReducers({
    globalLoadingBar,
  });
  
export default rootReducer;
