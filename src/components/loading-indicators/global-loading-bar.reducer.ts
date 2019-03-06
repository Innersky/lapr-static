import {
  SET_PROGRESS,
  SET_SHOW_LOADING,
  SET_STOPPING,
} from "./global-loading-bar.actions";
const initialState = {
    progress: 0,
    show: false,
    stopping: false,
};

export default (state = initialState, { type, ...payload }: any) => {
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
