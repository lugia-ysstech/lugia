import React from "react";
import { Avatar, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import avatarSrc from "../../../public/avatar-jiaxin.jpg";
const Wrapper = styled.div`
  padding: 2px;
`;
export default class TypeAvatar extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: "#e2e2e2" }, margin: 10 } }
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Avatar shape={"circle"} src={avatarSrc} />
          <Avatar shape={"circle"} name={"lugia"} />
          <Avatar shape={"circle"} icon={"lugia-icon-financial_user"} />
          <br />
          <Avatar shape={"square"} src={avatarSrc} />
          <Avatar shape={"square"} name={"lugia"} />
          <Avatar shape={"square"} icon={"lugia-icon-financial_user"} />
        </Wrapper>
      </Theme>
    );
  }
}
