import React from 'react';
import { Switch } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSwitch extends React.Component {
  onchange = v => {
  };
  render() {
    return (
        <DemoItem>
          <div>value true</div>
          <Switch value={true} />
          <div>value false</div>
          <Switch value={false} />
        </DemoItem>
    );
  }
}
