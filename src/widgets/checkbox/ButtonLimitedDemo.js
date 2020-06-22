import React from "react";
import { Checkbox, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const CheckboxGroup = Checkbox.Group;
const options = [
  { label: "check1", value: "11", name: "1" },
  { label: "check2", value: "22", name: "2" },
  { label: "check3", value: "33", name: "3" }
];

const checkboxView = {
  [Widget.CheckboxGroup]: {
    CheckButton: {
      CheckButtonChecked: {
        normal: {
          width: 80,
          padding: { left: 10, right: 10 }
        }
      },
      CheckboxEdgeCancel: {
        normal: {
          width: 80,
          padding: { left: 10, right: 10 }
        }
      },
      CheckButtonUnChecked: {
        normal: {
          width: 80,
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
  handleChange = ({ newValue, newDisplayValue }: any): any => {
    console.info(newValue, newDisplayValue);
    this.setState({ newValue, newDisplayValue });
  };
  render() {
    return (
      <Theme config={checkboxView}>
        <CheckboxGroup
          onChange={this.handleChange}
          data={options}
          value={this.state.newValue}
          displayValue={["check4", "check5"]}
          displayField="label"
          childType="button"
        />
      </Theme>
    );
  }
}
