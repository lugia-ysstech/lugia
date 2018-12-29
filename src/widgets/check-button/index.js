/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { checkButton   } from '@lugia/lugia-web';
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
        <checkButton size="small">checkButton</checkButton>
        <Div />
        <checkButton>checkButton</checkButton>
        <Div />
        <checkButton size="large">checkButton</checkButton>
        <Div />
        <checkButton size="bigger">checkButton</checkButton>
      </Wrapper>

      <Wrapper>
        <h4>checked</h4>
        <checkButton checked>checkButton</checkButton>
        <Div />
        <checkButton onChange={handleChange}>checkButton</checkButton>
      </Wrapper>
      <Wrapper>
        <h4>disabled</h4>
        <checkButton disabled>checkButton</checkButton>
        <Div />
        <checkButton disabled checked>
          checkButton
        </checkButton>
      </Wrapper>
    </div>
  );
};

