/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from "react";
import TypeDivider from "./TypeDivider";
import PositionDivider from "./PositionDivider";
import VerticalDivider from "./VerticalDivider";

export default () => {
  return (
    <div>
      <TypeDivider />
      <br />
      <PositionDivider />
      <br />
      <VerticalDivider />
    </div>
  );
};
