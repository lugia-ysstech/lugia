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
          <div>Theme Switch_SwitchOpen</div>
          <Theme
            config={
              {
                [Widget.Switch]: {
                  Switch_SwitchOpen: {
                    normal: {
                      width: 150,
                      height: 40,
                      fontSize: 30,
                      color: '#fff',
                      background: {
                        color: '#ff7a8a',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                      borderRadius:getBorderRadius(10),
                      boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: {
                        color: '#52437b',
                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                    disabled: {
                      background: {
                        color: '#52437b',

                      },
                      border: getBorder({ color: '#ddd', width: 1, style: 'solid' }),
                    },
                  },
                }
              }

            }
          >
            <Switch  value={true} />
            <div>Theme Switch_SwitchOpen disabled</div>
            <Switch disabled value={true}  data={[{ text: <Icon iconClass={'lugia-icon-reminder_check'} /> }, { text: <Icon iconClass={'lugia-icon-reminder_close'} /> }]}   />
          </Theme>


        </DemoItem>
    );
  }
}
