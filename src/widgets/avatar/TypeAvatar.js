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
          <Avatar shape={"circle"} type="img" src={avatarSrc} />
          <Avatar shape={"circle"} type="text" name={"lugia"} />
          <Avatar
            shape={"circle"}
            type="icon"
            icon={"lugia-icon-financial_user"}
          />
          <br />
          <Avatar shape={"square"} type="img" src={avatarSrc} />
          <Avatar shape={"square"} type="text" name={"lugia"} />
          <Avatar
            shape={"square"}
            type={"icon"}
            icon={"lugia-icon-financial_user"}
          />
        </Wrapper>
      </Theme>
    );
  }
}
