import React from 'react';
import {DemoItem} from './styled';
import { Switch } from '@lugia/lugia-web';
export default class BaseSwitch extends React.Component{
  render() {
    return (
      <div>
        <DemoItem>
          <Switch loading />
        </DemoItem>
        <br/>
        <DemoItem>
          <Switch size={'small'} loading />
        </DemoItem>
      </div>
    );
  }
}
