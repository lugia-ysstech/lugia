import React from "react";
import { Radio, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const view = {
  [Widget.RadioGroup]: {
    CheckButton: {
      CheckButtonChecked: {
        normal: {
          width: 100,
          padding: { left: 10, right: 10 }
        }
      },
      CheckButtonCancel: {
        normal: {
          width: 100,
          padding: { left: 10, right: 10 }
        }
      },
      CheckButtonUnChecked: {
        normal: {
          width: 100,
          padding: { left: 10, right: 10 }
        }
      }
    }
  }
};
export default class RadioDemo extends React.Component {
  onChange = obj => {
    console.info("obj-demo", obj);
  };
  render() {
    return (
      <Theme config={view}>
        <RadioGroup
          childType="button"
          onChange={this.onChange}
          defaultValue="1"
        >
          <RadioButton value="1">Radio1</RadioButton>
          <RadioButton value="2">Radio2</RadioButton>
          <RadioButton value="3">Radio3</RadioButton>
        </RadioGroup>
      </Theme>
    );
  }
}
