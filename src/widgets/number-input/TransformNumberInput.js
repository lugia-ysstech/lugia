import React from 'react';
import { NumberInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;

export default class TransformNumberInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const formatter = value => {
      return `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const parser = value => {
      return value.replace(/\$\s?|(,*)/g, '');
    };
    return (
      <Wrapper>
        <NumberInput
          formatter={formatter}
          parser={parser}
          defaultValue={100000}
          max={1000000}
          min={10000}
          step={10000}
        />
        <NumberInput
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          defaultValue={10}
          max={100}
          min={5}
          step={5}
        />
      </Wrapper>
    );
  }
}
