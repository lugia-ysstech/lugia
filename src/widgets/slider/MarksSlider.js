import React from 'react';
import { Slider, Theme } from '@lugia/lugia-web';
export default class MarksSlider extends React.Component<any, any> {
  onchange = v => {
  };
  render() {
    return (
      <div>
        <div style={{ float: 'left', padding: '0 20px 50px' }}>
          <h2 style={{ padding: '20px 0' }}> 离散 marks 对象+对象</h2>
          <Slider
            maxValue={25}
            defaultValue={10}
            minValue={0}
            tips
            onChange={onchange}
            marks={{
              10: {
                text: '10℃',
                style: {
                  color: 'blue'
                }
              },
              20: {
                text: '20℃',
                style: {
                  color: 'pink'
                }
              },
              40: {
                text: '40℃',
                style: {
                  color: 'red'
                }
              }
            }}
          />
        </div>
        <div style={{ float: 'left', padding: '0 20px 50px' }}>
          <h2 style={{ padding: '20px 0' }}> 离散 marks 对象+对象</h2>
          <Slider
            maxValue={25}
            defaultValue={[10, 20]}
            minValue={0}
            tips
            onChange={onchange}
            marks={{
              10: {
                text: '10℃',
                style: {
                  color: 'blue'
                }
              },
              20: {
                text: '20℃',
                style: {
                  color: 'pink'
                }
              },
              40: {
                text: '40℃',
                style: {
                  color: 'red'
                }
              }
            }}
          />
        </div>
        <div style={{ float: 'left', padding: '0 20px 50px' }}>
          <h2 style={{ padding: '20px 0' }}> 离散no min max</h2>
          <Slider
            defaultValue={5}
            tips
            onChange={onchange}
            marks={{
              10: '10℃',
              20: '20℃',
              40: {
                text: '40℃',
                style: {
                  color: 'red'
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
}
