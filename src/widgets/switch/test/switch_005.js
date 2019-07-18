import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
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
          <div>size small</div>
          <Switch size={'small'}  />

          <div>size default</div>
          <Switch  />

          <div>size large</div>
          <Switch size={'large'}  />

        </DemoItem>
    );
  }
}
