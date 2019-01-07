import React from 'react';
import { Slider, Theme } from '@lugia/lugia-web';
export default class IconSlider extends React.Component<any, any> {
  render() {
    onchange = v => {
    };
    return (
      <div>
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> normal</h2>
          <Slider vertical tips onChange={onchange} />
        </div>
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> 单滑块value</h2>
          <Slider
            defaultValue={0}
            vertical
            value={10}
            onChange={onchange}
          />
        </div>
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> 单滑块</h2>
          <Slider defaultValue={10} vertical />
        </div>
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> 双滑块</h2>
          <Slider defaultValue={[10, 20]} tips vertical />
        </div>
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> 双滑块value</h2>
          <Slider
            defaultValue={[10, 20]}
            value={[10, 20]}
            tips
            vertical
            onChange={onchange}
          />
        </div>
      </div>
    );
  }
}
