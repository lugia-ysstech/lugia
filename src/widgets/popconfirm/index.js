/**
 *
 * create by liangguodong
 *
 * @flow
 */
import * as React from "react";
import BasePopconfirm from "./BasePopconfirm";
import CoditionPopconfirm from "./CoditionPopconfirm";
import ActionPopconfirm from "./ActionPopconfirm";
import TypePopconfirm from "./TypePopconfirm";

export default () => {
  return (
    <div>
      <BasePopconfirm />
      <br />
      <CoditionPopconfirm />
      <br />
      <ActionPopconfirm />
      <br />
      <TypePopconfirm />
    </div>
  );
};
