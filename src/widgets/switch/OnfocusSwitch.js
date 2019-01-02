/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Switch } from '@lugia/lugia-web';
export default class OnfocusSwitch extends React.Component<any, any> {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>autoFocus</h3>
          <Switch
            autoFocus
            onChange={this.change}
            data={[{ text: '年' }, { text: '月' }]}
          />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>autoFocus && value</h3>
          <Switch
            autoFocus
            onChange={this.change}
            value
            data={[{ text: '年' }, { text: '月' }]}
          />
        </section>
      </div>
    );
  }
}
