import React from 'react';
import { NumberInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;
export default class PrecisionNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <NumberInput
          max={1}
          min={0.001}
          step={0.005}
          defaultValue="0.05"
          precision={3}
        />precision
        <NumberInput
          max={10}
          min={0.01}
          step={0.05}
          defaultValue="1"
          precision={2}
        />
      </Wrapper>
    );
  }
}
