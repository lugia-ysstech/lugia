/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from "react";
import DefaultValueInput from "./DefaultValueInput";
import TransformInput from "./TransformInput";
import DisableInput from "./DisableInput";
import ValidateTypeInput from "./ValidateTypeInput";
import SizeInput from "./SizeInput";
import BaseInput from "./BaseInput";
import PrefixInput from "./PrefixInput";

const InputDemo = () => {
  return (
    <div>
      <BaseInput />
      <DefaultValueInput />
      <SizeInput />
      <DisableInput> </DisableInput>
      <TransformInput> </TransformInput>
      <PrefixInput> </PrefixInput>
      <ValidateTypeInput> </ValidateTypeInput>
    </div>
  );
};
export default InputDemo;
