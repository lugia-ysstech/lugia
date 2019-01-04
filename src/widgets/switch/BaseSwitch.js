import React from 'react';
import { Switch, Theme } from '@lugia/lugia-web';
export default class BaseSwitch extends React.Component<any, any> {
  onchange = v => {};
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>normal</h3>
          <Switch />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>size=‘small’</h3>
          <Switch size={'small'} />
        </section>
      </div>
    );
  }
}
