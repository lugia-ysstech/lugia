import React from 'react';
import { Switch } from '@lugia/lugia-web';
export default class BaseSwitch extends React.Component<any, any> {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>loading</h3>
          <Switch loading />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>'loading=delay:3000'</h3>
          <Switch loading={{ delay: 3000 }} />
        </section>
      </div>
    );
  }
}
