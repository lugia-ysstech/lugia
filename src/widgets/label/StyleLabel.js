import React from "react";
import { Label ,Theme} from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

export default class PrefixLabel extends React.Component<any, any> {
  render() {
    const config = {
      [Widget.Label]: {
        Container: {
          normal: {
            color: '#2d3c93',
            font: {
              weight: 'bold',
              size: 20,
            },
            margin: {
              left: 30,
              top: 10,
            },
            padding: {
              right: 10,
              bottom: 10,
            },
            border: {
              left:{
                width:2,
                style:'solid',
                color:'#4d63ff'
              }
            },

          },
          hover: {
            color: '#ac3400',
            cursor: 'pointer',
          },
        },
        LabelPrefix: {
          normal: {
            color: 'red',
            margin: {
              right: 10,
              left: 5
            },
          },
        },
      },
    };
    return <Theme config={config}>
      <Label showPrefix  prefix={'*'} >这是一个带前缀的文本组件</Label>

    </Theme>;
  }
}
