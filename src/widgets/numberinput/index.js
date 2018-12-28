/**
 *
 * create by liangguodong
 *
 */
import * as React from "react";
import BaseNumberInput from "./BaseNumberInput";
import DefaultValueNumberInput from "./DefaultValueNumberInput";
import SizeNumberInput from "./SizeNumberInput";
import RangeNumberInput from "./RangeNumberInput";
import PrecisionNumberInput from "./PrecisionNumberInput";
import DisabledNumberInput from "./DisabledNumberInput";
import TransformNumberInput from "./TransformNumberInput";

const NumberInputDemo = () => {
  return (
    <div>
      <BaseNumberInput/>
      <br/>
      <DefaultValueNumberInput/>
      <br/>
      <SizeNumberInput/> <br/>
      <RangeNumberInput/> <br/>
      <PrecisionNumberInput/> <br/>
      <DisabledNumberInput/> <br/>
      <TransformNumberInput/> <br/>
    </div>
  );
};
export default NumberInputDemo;
