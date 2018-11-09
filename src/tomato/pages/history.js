/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import tomato from "../models/tomato";
import { bindTo } from "@lugia/lugiax";

import History from "../components/History";

const TomatoHistory = bindTo(
  tomato,
  {
    tomotos: "data"
  },
  {},
  {
    onClick() {}
  }
)(History);

export default () => {
  return <TomatoHistory />;
};
