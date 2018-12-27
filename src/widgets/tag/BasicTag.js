/**
 * create by szfeng
 *
 * @flow
 */
import Widget from "@lugia/lugia-web/dist/consts/index";
import { Theme, Tag } from "@lugia/lugia-web";
import styled from "styled-components";
import React from "react";
const TagWrap = styled.div`
  display: inline-block;
  margin: 5px;
`;

export default class BasicTag extends React.Component<any, any> {
  render() {
    const config1 = {
      [Widget.Tag]: {
        color: "#ff3300"
      }
    };

    const config2 = {
      [Widget.Tag]: {
        color: "#0088cc"
      }
    };

    const config3 = {
      [Widget.Tag]: {
        color: "#333333"
      }
    };

    return [
      <Theme config={config1}>
        <TagWrap>
          <Tag type={"basic"}>basic</Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag type={"basic"}>basic</Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag type={"basic"} shape={"round"}>
            basic
          </Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config3}>
        <TagWrap>
          <Tag type={"basic"}>basic</Tag>
        </TagWrap>
      </Theme>
    ];
  }

  onClose = () => {
    console.log("close");
  };
}
