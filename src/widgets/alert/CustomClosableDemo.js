import * as React from 'react';
import {Alert} from '@lugia/lugia-web';

export default class AlertDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert type="error" message="Alert-error" closable closeText="确定" />
        <br />
        <Alert type="warning" message="Alert-warning" closable closeText="ok" />
      </div>
    );
  }
}
