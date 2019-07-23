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
        BadgeDot: {
          normal: {
            position: { right: 5, top: 3 }
          }
        }
      },
      [Widget.NumberTurn]: {
        normal: {
          position: { right: -8, top: 2}
        }
      }
    };
    const register = {
      [Widget.Badge]: {
        BadgeDot: {
          normal: {
            position: { right: 8, top: 8 }
          }
        }
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Badge dot={true}>
            <Avatar shape={"square"} size={"large"} name={"lugia"} />
          </Badge>
          <Theme config={view}>
            <Theme config={register}>
              <Badge dot={true}>
                <Avatar icon={"lugia-icon-financial_user"} size={"large"} />
              </Badge>
            </Theme>
            <br />
            <Badge count={10}>
              <Avatar shape={"square"} size={"large"} name={"lugia"} />
            </Badge>
            <Badge viewClass="register" count={10}>
              <Avatar icon={"lugia-icon-financial_user"} size={"large"} />
            </Badge>
          </Theme>
        </Wrapper>
      </Theme>
    );
  }
}
