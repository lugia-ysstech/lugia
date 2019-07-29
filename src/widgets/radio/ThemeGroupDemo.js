import React from 'react';
import {Radio, Theme} from '@lugia/lugia-web';
import Widget from "@lugia/lugia-web/dist/consts/index";

const RadioGroup = Radio.Group;

export default class RadioDemo extends React.Component {
    render() {
      const radioView = {
        [Widget.RadioGroup]: {
          Radio: {
            Container: {
              normal: {
                width: 200,
                height: 50,
                margin: {
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }
              },
              hover: {
                opacity: 0.6,
              },
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
        },
      };
        return (
            <div>
              <div style={{margin: '10px 0'}} >默认的单选框组: </div>
              <RadioGroup defaultValue="1">
                <Radio value="1">Radio</Radio>
                <Radio value="2">Radio2</Radio>
                <Radio value="3" disabled>
                  Radio3
                </Radio>
              </RadioGroup>
              <div  style={{margin: '10px 0'}} >配置主题的单选框组: </div>
              <Theme config={radioView}>
                <RadioGroup defaultValue="1">
                  <Radio value="1">Radio</Radio>
                  <Radio value="2">Radio2</Radio>
                  <Radio value="3" disabled>
                    Radio3
                  </Radio>
                </RadioGroup>
              </Theme>
            </div>
        );
    }
}
