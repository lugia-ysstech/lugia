import * as React from 'react';
import Alert from './alert';
import Theme from '../theme';
import Widget from '../consts';

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
