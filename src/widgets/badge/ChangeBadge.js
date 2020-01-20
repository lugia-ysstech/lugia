import React from "react";
import { Badge, Theme, Icon } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";

const Wrapper = styled.div``;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class ChangeBadge extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  click = type => () => {
    const count = type === "plus" ? this.state.count + 1 : this.state.count - 1;
    this.setState({ count });
  };
  render() {
    const config = {
      [Widget.Badge]: {
        Badge: {
          normal: { position: { top: -5, right: -5 } }
        }
      }
    };
    return (
      <Wrapper>
        <Theme config={config}>
          <Badge count={this.state.count} showZero overflowCount={99}>
            <Box />
          </Badge>
          <Icon
            iconClass="lugia-icon-reminder_plus_square_o"
            onClick={this.click("plus")}
          />
          <Icon
            iconClass="lugia-icon-reminder_minus_square_o"
            onClick={this.click("minus")}
          />
        </Theme>
      </Wrapper>
    );
  }
}
