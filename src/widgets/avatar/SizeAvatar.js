import React from "react";
import { Avatar, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const Wrapper = styled.div``;
export default class SizeAvatar extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: "#e2e2e2" }, margin: 10 } }
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Avatar shape={"circle"} size={"small"} name={"L"} />
          <Avatar shape={"circle"} size={"default"} name={"lug"} />
          <Avatar shape={"circle"} size={"large"} name={"lugia"} />
          <br />
          <Avatar shape={"square"} size={"small"} name={"L"} />
          <Avatar shape={"square"} size={"default"} name={"lug"} />
          <Avatar shape={"square"} size={"large"} name={"lugia"} />
        </Wrapper>
      </Theme>
    );
  }
}
