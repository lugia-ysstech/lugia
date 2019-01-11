import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class MarksSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
      <React.Fragment>
        <DemoItem>
            <Slider
              defaultValue={30}
              tips
              marks={{
                0: '0℃',
                30: '30℃',
                70: '70℃',
                100: {
                  text: '100℃',
                  style: {
                    color: 'red'
                  }
                }
              }}
            />
          </DemoItem><br/>
          <DemoItem>
            <Slider
              defaultValue={30}
              tips
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
          </DemoItem><br/>
          <DemoItem>
            <Slider
              minValue={0}
              defaultValue={30}
              tips
              marks={{
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
          </DemoItem>  
      </React.Fragment>
    );
  }
}
