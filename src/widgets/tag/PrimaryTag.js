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

export default class PrimaryTag extends React.Component<any, any> {
  render() {
    const config1 = {
      [Widget.Tag]: {
        color: "#ffffff"
      }
    };

    const config2 = {
      [Widget.Tag]: {
        color: "#00ee88"
      }
    };

    const config3 = {
      [Widget.Tag]: {
        color: "#cccccc"
      }
    };

    return [
      <Theme config={config1}>
        <TagWrap>
          <Tag type={"primary"}>
            primary
          </Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag type={"primary"}>
            primary
          </Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag type={"primary"} shape={"round"}>
            primary
          </Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config3}>
        <TagWrap>
          <Tag type={"primary"}>primary</Tag>
        </TagWrap>
      </Theme>
    ];
  }

  onClose = () => {
    console.log("close");
  };
}
