import React from 'react';
import { Switch } from '@lugia/lugia-web';
export default class DataSwitch extends React.Component<any, any> {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <section style={{ marginBottom: '20px' }}>
          <h3>data.length=3</h3>
          <Switch data={[{ text: '年' }, { text: '月' }, { text: '日' }]} />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>data.length=2 isInverse defaultValue</h3>
          <Switch
            data={[{ text: '开' }, { text: '关' }]}
            isInverse
            defaultValue
          />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h3>data `data.length=1 isInverse`</h3>
          <Switch data={[{ text: '开' }]} isInverse />
        </section>
      </div>
    );
  }
}
