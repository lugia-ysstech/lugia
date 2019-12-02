import React from "react";
import { Icon, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import Copy from "../code-box/Copy";
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
const { themeColor,defaultColor } = colorsFunc();

const IconWrapper = styled.div`
  display: inline-block;
  &:hover {
    background: ${themeColor};
    transform: scale(1.2);
    > i {
      color: ${defaultColor};
    }
  }

  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  margin: 5px;
  border-radius: 4px;
  background-color: ${defaultColor};
`;
export default class BaseIcon extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            margin: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            },
            fontSize: 36
          },
          hover: {
            color: "white"
          }
        }
      }
    };

    return (
      <Theme config={view}>
        <Copy ref={cmp => (this.copy = cmp)} />
        <IconWrapper>
          <Icon
            iconClass={"lugia-icon-financial_unlock"}
            onClick={() => {
              this.copy.copy("lugia-icon-financial_unlock");
            }}
          />
        </IconWrapper>
        <IconWrapper>
          <Icon
            iconClass={"lugia-icon-financial_upload_cloud"}
            onClick={() => {
              this.copy.copy("lugia-icon-financial_upload_cloud");
            }}
          />
        </IconWrapper>
        <IconWrapper>
          <Icon
            iconClass={"lugia-icon-financial_pay"}
            onClick={() => {
              this.copy.copy("lugia-icon-financial_pay");
            }}
          />
        </IconWrapper>
      </Theme>
    );
  }
}
