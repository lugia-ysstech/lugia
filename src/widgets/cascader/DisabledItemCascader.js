/**
 *
 * create by szfeng
 *
 */
import React from "react";
import { Cascader, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const data = [
  {
    value: "Navigation",
    text: "Navigation",
    children: [
      { value: "Affix", text: "Affix" },
      { value: "Breadcrumb", text: "Breadcrumb", disabled: true },
      { value: "Dropdown", text: "Dropdown" },
      { value: "Menu", text: "Menu", disabled: true },
      { value: "Pagination", text: "Pagination" },
      { value: "Steps", text: "Steps" }
    ]
  },

  {
    value: "Data Entry",
    text: "Data Entry",
    disabled: true,
    children: [
      { value: "AutoComplete", text: "AutoComplete" },
      { value: "Cascader", text: "Cascader" },
      { value: "Checkbox", text: "Checkbox" },
      { value: "DatePicker", text: "DatePicker" },
      { value: "Form", text: "Form" },
      { value: "Input", text: "Input" }
    ]
  }
];

export default class extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Theme
          config={{
            [Widget.Cascader]: {
              Container: {
                normal: { width: 300 }
              }
            }
          }}
        >
          <Cascader
            data={data}
            placeholder={"请选择"}
            separator={"/"}
            action={"hover"}
          />
        </Theme>
      </div>
    );
  }
}
