import React from 'react';
import {DemoItem} from './styled';
import { Slider } from '@lugia/lugia-web';
export default class IconSlider extends React.Component {
  render() {
    return (
      <div style={{ float: 'left', padding: '0 40px 50px' }}>
      <DemoItem>
      <Slider
            defaultValue={5}
            tips
            icons={[
              { name: 'lugia-icon-financial_sad_o' },
              { name: 'lugia-icon-financial_smile_o' }
            ]}
          />
      </DemoItem>
      </div>
    );
  }
}
