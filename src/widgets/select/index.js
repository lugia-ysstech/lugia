/**
 *
 * create by LYQ
 *
 */

import * as React from "react";
import { Select, Theme } from "@lugia/lugia-web";
import DefaultSelect from "./DefaultSelect";
import LimitSingleSelect from "./LimitSingleSelect";
import SearchSelect from "./SearchSelect";
import MutlipleSelect from "./MutlipleSelect";
import CanInputSelect from "./CanInputSelect";
import LimitMutlipleSelect from "./LimitMutlipleSelect";

export default class Demo extends React.Component {
  render() {
    return [
      <h3>默认 Select 选择器</h3>,
      <DefaultSelect />,
      <h3>受限的单选 Select 选择器</h3>,
      <LimitSingleSelect />,
      <h3>可搜索的 Select 选择器</h3>,
      <SearchSelect />,
      <h3>多选 Select 选择器</h3>,
      <MutlipleSelect />,
      <h3>可输入自定义值的 Select 选择器</h3>,
      <CanInputSelect />,
      <h3>受限的多选 Select 选择器</h3>,
      <LimitMutlipleSelect />
    ];
  }
}
