/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { NumberInput } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;
export default class RangeNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <p>max 1 min 0.001 step 0.005 </p>
        <NumberInput
          max={100}
          min={10}
          step={5}
          defaultValue="5"
        />
        <p>max 10 min 0.01 step 0.05 </p>
        <NumberInput
          max={1}
          min={0.01}
          step={0.01}
          defaultValue="0.50"
        />
        <p>max 100 min 9 step 5 </p>
        <NumberInput
          max={100}
          min={10}
          step={5}
          defaultValue="10"
        />
      </Wrapper>
    );
  }
}
