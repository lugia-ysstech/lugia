/**
 *
 * create by
 *
 */
import * as React from "react";
import { steps, Button, Theme } from "@lugia/lugia-web";
import BaseSteps from "./BaseSteps";
import OrientationSteps from "./OrientationSteps";
import TypeSteps from "./TypeSteps";
import StepsDemo from "./StepsDemo";

export default () => {
  return (
    <div>
      <BaseSteps />
      <br />
      <TypeSteps />
      <br />
      <OrientationSteps />
      <br />
      <StepsDemo />
    </div>
  );
};
