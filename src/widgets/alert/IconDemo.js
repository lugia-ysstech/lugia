import * as React from 'react';
import Alert from './alert';

export default class AlertDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert message="Alert-info" showIcon />
        <br />
        <Alert type="success" message="Alert-success" showIcon />
        <br />
        <Alert type="error" message="Alert-error" showIcon />
        <br />
        <Alert type="warning" message="Alert-warning" showIcon />
        <br />
        <Alert message="Alert-info" closable description="这是辅助性文字介绍" showIcon />
        <br />
        <Alert
          type="success"
          message="Alert-success"
          closable
          description="这是辅助性文字介绍"
          showIcon
        />
        <br />
        <Alert
          type="error"
          message="Alert-error"
          closable
          closeText="确定"
          description="这是辅助性文字介绍"
          showIcon
        />
        <br />
        <Alert
          type="warning"
          message="Alert-warning"
          closable
          closeText="ok"
          description="这是辅助性文字介绍"
          showIcon
        />
      </div>
    );
  }
}
