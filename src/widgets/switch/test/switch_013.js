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
          <div>Theme Switch_SwitchClosed</div>
          <Theme
            config={
              {
                [Widget.Switch]: {
                  Switch_SwitchClosed: {
                    normal: {
                      width: 150,
                      height: 40,
                      fontSize: 20,
                      color: '#fff',
                      background: {
                        color: '#bbded6',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                      borderRadius:getBorderRadius(10),
                      boxShadow: getBoxShadow('0 -3px 6px 0 #fae3d9'),
                    },
                    hover: {
                      background: {
                        color: '#8ac6d1',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                    active: {
                      background: {
                        color: '#8ac6d1',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                    disabled: {
                      background: {
                        color: '#8ac6d1',

                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                  },
                }
              }

            }
          >
            <Switch  value={false} />
            <div>Theme Switch_SwitchClosed disabled</div>
            <Switch disabled value={false}  />
          </Theme>


        </DemoItem>
    );
  }
}
