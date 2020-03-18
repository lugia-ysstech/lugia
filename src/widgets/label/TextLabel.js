import React from "react";
import { Label } from "@lugia/lugia-web";


export default class TextLabel extends React.Component<any, any> {

  render() {
    return <React.Fragment>
      <Label text={'这是一个传入text属性的文本组件'}/>
    </React.Fragment>;
  }
}
