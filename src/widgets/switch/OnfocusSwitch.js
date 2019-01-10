import React from 'react';
import { Switch } from '@lugia/lugia-web';
export default class OnfocusSwitch extends React.Component{
  render() {
    return (
          <Switch defaultValue autoFocus/>
    );
  }
}
