/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Theme, tabs } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const TabPane = tabs.TabPane;
const Tabs = tabs.Tabs;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  display: inline-block;
`;
const children = [
  <TabPane title={"1111"} content={"11111"} activityKey={"0"} />,
  <TabPane title={"2222"} content={<div>2222</div>} activityKey={"1"} />,
  <TabPane
    title={"3333"}
    content={
      <div>
        <div>
          <div>3333</div>
        </div>
      </div>
    }
    activityKey={"2"}
  />,
  <TabPane
    title={"4444"}
    content={
      <div>
        <div>
          <div>44444</div>
        </div>
      </div>
    }
    activityKey={"3"}
  />,
  <TabPane
    title={"555555"}
    content={
      <div>
        <div>
          <div>55555</div>
        </div>
      </div>
    }
    activityKey={"4"}
  />,
  <TabPane
    title={"666666"}
    content={
      <div>
        <div>
          <div>66666</div>
        </div>
      </div>
    }
    activityKey={"5"}
  />
];
const defaultData = [
  {
    icon: "lugia-icon-financial_archive",
    title: 1111111111,
    content: 1111
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 22222222222,
    content: 22222
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 3333333,
    content: 333
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 44444444,
    content: 4444444
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 55555,
    content: 555555
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 666666,
    content: 66666
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 7777777,
    content: 777777
  },
  {
    icon: "lugia-icon-financial_archive",
    title: 88888,
    content: 888888
  }
];
export default class BaseTabs extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Tabs]: {
        width: 500,
        height: 200
      }
    };

    const onPreClick = e => {};
    const onNextClick = e => {};

    return (
      <Theme config={view}>
        <Wrapper>
          <p>基本使用 配置data</p>
          <Tabs
            titleType={"line"}
            tabPosition={"top"}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            data={defaultData}
          />
        </Wrapper>
        <Wrapper>
          <p>基本使用 配置children</p>
          <Tabs
            titleType={"line"}
            tabPosition={"top"}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            children={children}
          />
        </Wrapper>
      </Theme>
    );
  }
}
