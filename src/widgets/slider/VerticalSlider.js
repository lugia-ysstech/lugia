import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoList=styled.span`
  display:inline-block;
  padding:0 100px;
`;
export default class IconSlider extends React.Component {
  render() {
    onchange = v => {
    };
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
