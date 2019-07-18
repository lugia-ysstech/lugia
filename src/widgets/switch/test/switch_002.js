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
          <div>defaultValue true</div>
          <Switch defaultValue={true} />
          <div>defaultValue false</div>
          <Switch defaultValue={false} />
        </DemoItem>
    );
  }
}
