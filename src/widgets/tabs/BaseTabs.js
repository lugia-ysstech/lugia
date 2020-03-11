import React from "react";
import { Tabs } from "@lugia/lugia-web";
import styled from "styled-components";

const TabPane = Tabs.TabPane;

const Wrapper = styled.div`
  display: inline-block;
`;

const defaultData = [
  {title: "Tab1", content: "content of Tab1"},
  {title: "Tab2", content: "content of Tab2"},
  {title: "Tab3", content: "content of Tab3"},
  {title: "Tab4", content: "content of Tab4"},
  {title: "Tab5", content: "content of Tab5"},
  {title: "Tab6", content: "content of Tab6"},
  {title: "Tab7", content: "content of Tab7"},
  {title: "Tab8", content: "content of Tab8"}
];
export default class BaseTabs extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Tabs
          titleType={"line"}
          tabPosition={"top"}
          defaultData={defaultData}
          showAddBtn showDeleteBtn
        />
        <Tabs
          titleType={"line"}
          tabPosition={"top"}
        >
          <TabPane title={"Tab1"} content={<div>content of Tab1</div>} value={"0"}/>
          <TabPane title={"Tab2"} content={<div>content of Tab2</div>} value={"1"}/>
          <TabPane title={"Tab3"} content={<div>content of Tab3</div>} value={"2"}/>
          <TabPane title={"Tab4"} content={<div>content of Tab4</div>} value={"3"}/>
          <TabPane title={"Tab5"} content={<div>content of Tab5</div>} value={"4"}/>
          <TabPane title={"Tab6"} content={<div>content of Tab6</div>} value={"5"}/>
        </Tabs>
      </Wrapper>
    );
  }
}
