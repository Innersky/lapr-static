import GlobalLoadingIndicator from "../components/loading-indicators/global-loading-indicator";

export default class HttpRequestDelegate {

  public static bindLoadingIndicator(indicator: GlobalLoadingIndicator) {
    this.loadingIndicator = indicator;
  }

  public static request(
    url: string,
    params: any,
    showLoading: boolean,
    successCallback?: (data: any) => void,
    errorCallback?: () => void,
    finallyCallback?: () => void
  ): void {
    if (showLoading) {
      this.loadingIndicator.start();
    }
    params.credentials = 'include';
    fetch(url, params).then((res: Response) => res.json())
      .then((data) => {
        if (successCallback) {
          successCallback(data);
        }
      })
      .catch(() => {
        if (errorCallback) {
          errorCallback();
        }
      })
      .then(() => {
        if (showLoading) {
          this.loadingIndicator.stop();
        }
        if (finallyCallback) {
          finallyCallback();
        }
      });
  }

  private static loadingIndicator: GlobalLoadingIndicator;
}
