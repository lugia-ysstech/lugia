import React from 'react';
import { Switch } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 0 10px 0;
`;
export default class BaseSwitch extends React.Component{
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <Switch loading />
        </DemoItem>
          <Switch size={'small'} loading />
      </React.Fragment>
    );
  }
}
