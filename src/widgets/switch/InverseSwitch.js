/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Switch, Theme } from '@lugia/lugia-web';
export default class InverseSwitch extends React.Component<any, any> {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>isInverse</h3>
          <Switch isInverse />
        </section>
      </div>
    );
  }
}
