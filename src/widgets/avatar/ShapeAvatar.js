/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Avatar, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
export default class ShapeAvatar extends React.Component<any, any> {

  render () {
    const view = {
      [ Widget.Avatar ]: {
        color: "white",
        backgroundColor: "#cccccc",
        margin: 10
      },
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Avatar viewClass="register" shape={"square"} name={"lug"}/>
          <Avatar viewClass="register" shape={"square"} name={"lugia"}/>
          <br/>
          <Avatar viewClass="register" shape={"circle"} name={"lug"}/>
          <Avatar viewClass="register" shape={"circle"} name={"lugia"}/>
        </Wrapper>
      </Theme>);
  }
}
