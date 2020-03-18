import React from "react";
import { Label } from "@lugia/lugia-web";

export default class PrefixLabel extends React.Component<any, any> {
  render() {
    return <React.Fragment>
      <Label showPrefix  prefix={'*'} >这是一个带前缀的文本组件</Label>
      <br/><br/>
      <Label showPrefix  prefix={'##'} >这是一个带前缀的文本组件</Label>
    </React.Fragment>;
  }
}
