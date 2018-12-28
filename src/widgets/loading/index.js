/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import BaseLoad from "./BaseLoad";
import ScaleLoad from "./ScaleLoad";

class LoadingDemo extends React.Component {
  render() {
    return (
      <div>
        <BaseLoad />
        <ScaleLoad />
      </div>
    );
  }
}

export default LoadingDemo;
