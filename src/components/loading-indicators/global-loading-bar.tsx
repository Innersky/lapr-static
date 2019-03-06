import * as React from "react";
import { connect } from "react-redux";
import { BASE_INTERVAL } from "./global-loading-bar.actions";

interface IGlobalLoadingBarProps {
  progress: number;
  show: boolean;
  stopping: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    progress: state.globalLoadingBar.progress,
    show: state.globalLoadingBar.show,
    stopping: state.globalLoadingBar.stopping,
  };
};

class GlobalLoadingBar extends React.Component<IGlobalLoadingBarProps> {

  constructor(props: IGlobalLoadingBarProps) {
    super(props);
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
      width: (this.props.stopping ? 100 : this.props.progress) + "%",
      zIndex: 1000,
    };
    return (
      <div style={style}/>
    );
  }
}

export default connect(mapStateToProps)(GlobalLoadingBar);
