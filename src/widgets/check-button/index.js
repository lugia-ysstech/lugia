/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { CheckButton } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin: 20px;
`;
const H4 = styled.h4`
  margin: 0;
  padding: 0;
`;
const Div = styled.div`
  margin-bottom: 10px;
`;
const handleChange = value => {
  console.info(value);
};
export default () => {
    
  return (
    <div>
      <Wrapper>
        <h4>size</h4>
        <CheckButton size="small">CheckButton</CheckButton>
        <Div />
        <CheckButton>CheckButton</CheckButton>
        <Div />
        <CheckButton size="large">CheckButton</CheckButton>
        <Div />
        <CheckButton size="bigger">CheckButton</CheckButton>
      </Wrapper>

      <Wrapper>
        <h4>checked</h4>
        <CheckButton checked>CheckButton</CheckButton>
        <Div />
        <CheckButton onChange={handleChange}>CheckButton</CheckButton>
      </Wrapper>
      <Wrapper>
        <h4>disabled</h4>
        <CheckButton disabled>CheckButton</CheckButton>
        <Div />
        <CheckButton disabled checked>
          CheckButton
        </CheckButton>
      </Wrapper>
    </div>
  );
};
