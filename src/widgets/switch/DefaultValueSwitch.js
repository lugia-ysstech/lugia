import React from 'react';
import { Switch, Theme } from '@lugia/lugia-web';
export default class DefaultValueSwitch extends React.Component<any, any> {
  onchange = v => {};
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>data `value`</h3>
          <Switch value />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>defaultValue</h3>
          <Switch defaultValue />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>defaultValue && value</h3>
          <Switch defaultValue={false} value />
        </section>
      </div>
    );
  }
}
