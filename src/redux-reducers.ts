import { combineReducers } from "redux";
import {
  globalLoadingBarReducer,
  IGlobalLoadingBarState
} from "./components/loading-indicators/global-loading-bar.reducer";

export interface IRootReduxState {
  globalLoadingBar: IGlobalLoadingBarState;
}

export const rootReducer = combineReducers({
  globalLoadingBar: globalLoadingBarReducer,
});
