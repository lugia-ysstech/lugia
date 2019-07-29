import React from 'react';
import {Radio, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class RadioDemo extends React.Component {
    render() {
        const view = {
          [Widget.Radio]: {
            Container: {
              normal: {
                width: 100,
                margin: {
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }

              }
            },
            RadioText: {
              normal: {
                color: 'green',
                font: { fontSize: 16 },
                padding: {
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                },
              }
            }
          },
        };

        return (
            <div>
                <Theme config={view}>
                    <Radio viewClass="register" value="apple">
                        Radio
                    </Radio>
                </Theme>
            </div>
        );
    }
}
