import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
import { Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSwitch extends React.Component {
  render() {
    console.log('getBorderRadius',getBorderRadius(10));
    return (
        <DemoItem>
          <div>Theme SwitchButton</div>
          <Theme
            config={
              {
                [Widget.Switch]: {
                  SwitchContainer: {
                    normal: {
                      width: 120,
                      color: '#fff',
                      background: {
                        color: '#bbded6',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: {
                        color: '#ffb6b9',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                    active: {
                      width: 30,
                      height: 20,
                      background: {
                        color: '#8ac6d1',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                    disabled: {
                      background: {
                        color: '#ffb6b9',
                      },
                      border: getBorder({ color: 'red', width: 2, style: 'solid' }),
                    },
                  },
                }
              }

            }
          >
            <Switch   />
            <div>Theme SwitchButton disabled</div>
            <Switch disabled  />
          </Theme>


        </DemoItem>
    );
  }
}
