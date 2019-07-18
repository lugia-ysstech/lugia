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
                  SwitchButton: {
                    normal: {
                      width: 30,
                      height: 30,
                      color: '#fff',
                      background: {
                        color: '#bbded6',
                      },
                      // fontSize: 60,
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                      borderRadius:getBorderRadius(30),
                      boxShadow: getBoxShadow('0 -3px 6px 0 #fae3d9'),
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
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                  },
                }
              }

            }
          >
            <Switch   />
            <div>Theme SwitchButton disabled</div>
            <Switch disabled  />
            <div>Theme SwitchButton loading</div>
            <Switch loading  />
          </Theme>


        </DemoItem>
    );
  }
}
