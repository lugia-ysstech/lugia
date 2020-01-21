import React from "react";
import { Input, Icon } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";

const Wrapper = styled.div`
  display: inline-block;
`;
const InputWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
class ClearIcon extends React.Component<IconProps> {
  static displayName = Widget.ClearIcon;

  render() {
    return (
      <Icon
        iconClass="lugia-icon-reminder_close_circle_o"
        key="refresh"
        {...this.props}
      />
    );
  }
}

class SearchIcon extends React.Component<IconProps> {
  static displayName = Widget.SearchIcon;

  render() {
    return (
      <Icon
        iconClass="lugia-icon-financial_search"
        key="refresh"
        {...this.props}
      />
    );
  }
}
class PullIcon extends React.Component<IconProps> {
  static displayName = Widget.PullIcon;

  render() {
    return (
      <Icon
        iconClass="lugia-icon-direction_down"
        key="refresh"
        {...this.props}
      />
    );
  }
}
export default class PrefixInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <Input viewClass="register" prefix={<SearchIcon />} />
        </InputWrapper>
        <InputWrapper>
          <Input
            prefix={<SearchIcon />}
            viewClass="register"
            suffix={<ClearIcon />}
          />
        </InputWrapper>
        <InputWrapper>
          <Input viewClass="register" suffix={<PullIcon />} />
        </InputWrapper>
      </Wrapper>
    );
  }
}
