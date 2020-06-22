import React from "react";
import { Radio, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
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

const data = [
  { text: "radio1", value: "Apple" },
  { text: "radio2", value: "Pear" },
  { text: "radio3", value: "Orange", disabled: true }
];

export default class RadioDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "apple",
      displayValue: "hello"
    };
  }
  handleChange = obj => {
    this.setState({
      value: obj.newValue,
      displayValue: obj.newDisplayValue
    });
  };
  render() {
    return (
      <Theme config={view}>
        <RadioGroup
          onChange={this.handleChange}
          data={data}
          value={this.state.value}
          displayValue={this.state.displayValue}
          childType="button"
        />
      </Theme>
    );
  }
}
