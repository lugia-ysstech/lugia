import * as React from 'react';
import {Alert} from '@lugia/lugia-web';

export default class AlertDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert message="Alert-info" />
        <br />
        <Alert type="success" message="Alert-success" />
        <br />
        <Alert type="error" message="Alert-error" />
        <br />
        <Alert type="warning" message="Alert-warning" />
        <br />
      </div>
    );
  }
}
