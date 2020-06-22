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
  render() {
    return (
      <Theme config={checkboxView}>
        <CheckboxGroup
          data={options}
          childType={"button"}
          defaultValue={["11", "44"]}
          defaultDisplayValue={["check4", "check5"]}
          displayField="label"
        />
      </Theme>
    );
  }
}
