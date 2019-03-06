export const BASE_INTERVAL = 100;
const RANDOM_POST_INTERVAL = 500;
const FINISH_DELAY = 500;
const PROGRESS_INCREMENT = 0.05;

export const START_LOADING = "START_LOADING";

export const startLoading = () => (
  (dispatch: any) => {
    dispatch(setProgress(10));
    dispatch(setShowLoading(true));
    dispatch(progressLoading());
  }
);

export const STOP_LOADING = "STOP_LOADING";

export const stopLoading = () => (
  (dispatch: any) => {
    dispatch(setStopping(true));
    setTimeout(() => {
      dispatch(setStopping(false));
      dispatch(setShowLoading(false));
    }, FINISH_DELAY);
  }
);

export const PROGRESS_LOADING = "PROGRESS_LOADING";

export const progressLoading = () => (
  (dispatch: any, getState: any) => {
    setTimeout(() => {
      dispatch(setProgress(
        getState().progress + (90 - getState().progress) * PROGRESS_INCREMENT));
      if (getState().show) {
        dispatch(progressLoading());
      } else {
        dispatch(setProgress(0));
      }
    }, BASE_INTERVAL + RANDOM_POST_INTERVAL * Math.random());
  }
);

export const SET_SHOW_LOADING = "SET_SHOW_LOADING";

export const setShowLoading = (isShow: boolean) => ({
  type: SET_SHOW_LOADING,
  show: isShow,
});

export const SET_PROGRESS = "SET_PROGRESS";

export const setProgress = (progress: number) => ({
  type: SET_PROGRESS,
  progress,
});

export const SET_STOPPING = "SET_STOPPING";

export const setStopping = (isStopping: boolean) => ({
  type: SET_STOPPING,
  stopping: isStopping,
});
