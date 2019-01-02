import * as React from 'react';
import {Alert} from '@lugia/lugia-web';

export default class AlertDemo extends React.Component {
  render() {
    return <Alert showIcon icon="lugia-icon-logo_twitter" message="Alert-info" />;
  }
}
