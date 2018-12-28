/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Avatar, Badge, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
export default class ComboAvatar extends React.Component<any, any> {

  render () {
    const view = {
      [ Widget.Avatar ]: {
        color: "white",
        backgroundColor: "#cccccc",
        margin: 10
      },
      [ Widget.Badge ]: {
        position: { right: 10, top: 5 }
      },
    };
    const register = {
      [ Widget.Badge ]: {
        position: { right: 15, top: 8 }
      },
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Badge dot={true}>
            <Avatar shape={"square"} size={"large"} name={"lugia"}/>
          </Badge>
          <Theme config={view}>
            <Theme config={register}>
              <Badge dot={true}>
                <Avatar icon={"lugia-icon-financial_user"} size={"large"}/>
              </Badge>
            </Theme>
            <br/>
            <Badge count={10}>
              <Avatar shape={"square"} size={"large"} name={"lugia"}/>
            </Badge>
            <Badge viewClass="register" count={10}>
              <Avatar icon={"lugia-icon-financial_user"} size={"large"}/>
            </Badge>
          </Theme>
        </Wrapper>
      </Theme>);
  }
}
