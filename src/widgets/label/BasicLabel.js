import React from "react";
import { Label } from "@lugia/lugia-web";

export default class BasicLabel extends React.Component<any, any> {

  render() {
    return <React.Fragment>
      <Label onClick={this.onClick}>这是一个文本组件</Label>
    </React.Fragment>;
  }
  onClick = () => {
    console.log('clickLabel');
  }
}
