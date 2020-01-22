import React from "react";
import { Card, Theme } from "@lugia/lugia-web";
import Widget from '@lugia/lugia-web/dist/consts/index';

const themeConfig = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: 300,
      },
    },
    CardContent: {
      normal: {
        padding: {
          bottom: 10
        },
      },
    },
  },
};
export default class BaseCard extends React.Component<any, any> {
  render() {
    return (
      <Theme config={themeConfig}>
        <Card title={"This is title"} description={"This is description"} />
      </Theme>
    );
  }
}
