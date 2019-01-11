import React from 'react';
import { NumberInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
export default class PrecisionNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <NumberInput
          max={10}
          min={0}
          step={0.5}
          defaultValue="0.5"
          precision={1}
        />
      </Wrapper>
    );
  }
}
