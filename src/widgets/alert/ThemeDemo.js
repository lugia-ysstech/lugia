import * as React from 'react';
import {Alert, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class AlertDemo extends React.Component {
  render() {
    const view = {
      [Widget.Alert]: {
        width: 200,
        color: '#ffa500',
      },
    };
    return (
      <div>
        <Theme config={view}>
          <Alert message="Alert-info" />
        </Theme>
        <br />
        <Theme config={view}>
          <Alert showIcon message="Alert-info" />
        </Theme>
        <br />
        <Theme config={view}>
          <Alert showIcon closable closeText="ok" message="Alert-info" />
        </Theme>
      </div>
    );
  }
}
