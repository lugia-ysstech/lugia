import React from "react";
import { Avatar, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
const Wrapper = styled.div``;
export default class ShapeAvatar extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: "#e2e2e2" }, margin: 10,width:50,height:50 } }
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Avatar viewClass="register" shape={"circle"} name={"lug"} />
          <Avatar viewClass="register" shape={"circle"} name={"lugia"} />
          <br />
          <Avatar viewClass="register" shape={"square"} name={"lug"} />
          <Avatar viewClass="register" shape={"square"} name={"lugia"} />
        </Wrapper>
      </Theme>
    );
  }
}
