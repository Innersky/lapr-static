import { startLoading, stopLoading } from "../components/loading-indicators/global-loading-bar.actions";
import { store } from "../index";

class GlobalLoading {
  public start() {
    store.dispatch(startLoading() as any);
  }

  public stop() {
    store.dispatch(stopLoading() as any);
  }
}

export const GlobalLoadingService = new GlobalLoading();
