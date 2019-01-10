import React from 'react';
import {DemoList} from './styled';
import { Slider } from '@lugia/lugia-web';
export default class IconSlider extends React.Component {
  render() {
    onchange = v => {
    };
    return (
      <div>
        <DemoList>
          <Slider defaultValue={10} vertical tips/>
        </DemoList>
        <DemoList>
          <Slider
            defaultValue={[10, 20]}
            vertical
          />
        </DemoList>
        <DemoList>
          <Slider
              defaultValue={30}
              tips
              vertical
              marks={{
                0: {
                  text: '0℃'
                },
                30: {
                  text: '30℃'
                },
                70: {
                  text: '70℃'
                },
                100: {
                  text: '100℃',
                  style: {
                    color: 'red'
                  }
                }
              }}
            />
        </DemoList>
      </div>
    );
  }
}
