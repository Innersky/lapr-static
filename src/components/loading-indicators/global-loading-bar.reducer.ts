import { START_LOADING } from "./global-loading-bar.actions";
const initialState = {
    progress: 0,
    show: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {

  case START_LOADING:
    return {
        ...state,
        show: true,
    };

  default:
    return state;
  }
};
