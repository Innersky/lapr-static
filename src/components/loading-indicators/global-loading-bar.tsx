import * as React from "react";
import { connect } from "react-redux";

const BASE_INTERVAL = 100;
const RANDOM_POST_INTERVAL = 500;
const FINISH_DELAY = 500;
const PROGRESS_INCREMENT = 0.05;

interface IGlobalLoadingBarProps {
  progress: number;
  show: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    progress: state.progress,
    show: state.show,
  };
};

class GlobalLoadingBar extends React.Component<IGlobalLoadingBarProps> {
  private timeoutId: number;

  constructor(props: IGlobalLoadingBarProps) {
    super(props);
  }

  public start = () => {
    this.setState({
      progress: 10,
      show: true,
    });
    const timeout = () => {
      this.timeoutId = window.setTimeout(
        () => {
          this.setState({
            progress: this.props.progress + (100 - this.props.progress) * PROGRESS_INCREMENT,
          });
          if (this.props.show) {
            timeout();
          }
        },
        BASE_INTERVAL + RANDOM_POST_INTERVAL * Math.random());
    };
    timeout();
  }

  public stop = () => {
    clearTimeout(this.timeoutId);
    this.setState({
      progress: 100,
    });
    window.setTimeout(
      () => {
      this.setState({
        progress: 0,
        show: false,
      });
    },
      FINISH_DELAY);
  }

  public render() {
    const style: React.CSSProperties = {
      backgroundColor: "#000",
      boxShadow: "0 0 5px #ccc",
      display: this.props.show ? "block" : "none",
      height: "2px",
      left: "0",
      position: "fixed",
      top: "0",
      transition: "width " + (BASE_INTERVAL / 1000) + "s linear",
      width: this.props.progress + "%",
      zIndex: 1000,
    };
    return (
      <div style={style}/>
    );
  }
}

export default connect(mapStateToProps)(GlobalLoadingBar);
