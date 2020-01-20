import React from "react";
import { Avatar, Badge, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const Wrapper = styled.div``;
export default class ComboAvatar extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: "#e2e2e2" }, margin: 6 } }
      },
      [Widget.Badge]: {
        Badge: {
          normal: {
            position: { right: 2, top: 2 }
          }
        }
      }
    };
    const circle = {
      [Widget.Badge]: {
        Badge: {
          normal: {
            position: { right: 2, top: -2 }
          }
        }
      }
    };
    const numBadge = {
      [Widget.Badge]: {
        Badge: {
          normal: {
            position: { right: -2, top: -7 }
          }
        }
      }
    };
    return (
      <Wrapper>
        <Theme config={view}>
          <Badge dot={true}>
            <Avatar shape={"square"} size={"large"} name={"lugia"} />
          </Badge>
        </Theme>

        <Theme config={circle}>
          <Badge dot={true}>
            <Avatar
              type="icon"
              icon={"lugia-icon-financial_user"}
              size={"large"}
            />
          </Badge>
        </Theme>
        <br />
        <Theme config={view}>
          <Badge count={10}>
            <Avatar shape={"square"} size={"large"} name={"lugia"} />
          </Badge>
        </Theme>
        <Theme config={numBadge}>
          <Badge count={10}>
            <Avatar
              type="icon"
              icon={"lugia-icon-financial_user"}
              size={"large"}
            />
          </Badge>
        </Theme>
      </Wrapper>
    );
  }
}
