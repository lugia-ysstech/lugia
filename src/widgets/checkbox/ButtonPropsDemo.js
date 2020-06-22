import React from "react";
import { Checkbox, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const CheckboxGroup = Checkbox.Group;
const CheckBoxButton = Checkbox.Button;

const checkboxView = {
  [Widget.CheckboxGroup]: {
    CheckButton: {
      CheckButtonChecked: {
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

export default class CheckBoxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: ["11", "44"],
      newDisplayValue: ["check4", "check5"]
    };
  }
  handleChange = obj => {
    console.info(obj);
  };
  render() {
    return (
      <Theme config={checkboxView}>
        <CheckboxGroup
          childType="button"
          onChange={this.handleChange}
          defaultValue={["1", "2"]}
        >
          <CheckBoxButton value="1">CheckBox1</CheckBoxButton>
          <CheckBoxButton value="2">CheckBox2</CheckBoxButton>
          <CheckBoxButton value="3">CheckBox3</CheckBoxButton>
        </CheckboxGroup>
      </Theme>
    );
  }
}
