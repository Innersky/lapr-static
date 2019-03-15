import { LaprReduxAction } from "../../_interfaces/redux";
import {
  SET_PROGRESS,
  SET_SHOW_LOADING,
  SET_STOPPING,
} from "./global-loading-bar.actions";

export interface IGlobalLoadingBarState {
  progress: number;
  show: boolean;
  stopping: boolean;
}

const initialState = {
    progress: 0,
    show: false,
    stopping: false,
};

export const globalLoadingBarReducer = (
  state = initialState,
  { type, ...payload }: LaprReduxAction<IGlobalLoadingBarState>) => {
  switch (type) {
  case SET_SHOW_LOADING:
    return {
        ...state,
        ...payload,
    };
  case SET_STOPPING:
    return {
        ...state,
        ...payload,
    };
  case SET_PROGRESS:
    return {
        ...state,
        ...payload,
    };

  default:
    return state;
  }
};
