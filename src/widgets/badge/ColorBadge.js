import React from "react";
import { Badge, Theme } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div``;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class ColorBadge extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Theme
          config={{
            green: {
              BadgeDot: {
                normal: {
                  position: { top: -5, right: -5 },
                  background: { color: "green" }
                }
              }
            }
          }}
        >
          <Badge viewClass="green">
            <Box />
          </Badge>
        </Theme>
        <Theme
          config={{
            purple: {
              BadgeDot: {
                normal: {
                  position: { top: -5, right: -5 },
                  background: { color: "purple" }
                }
              }
            }
          }}
        >
          <Badge viewClass="purple">
            <Box />
          </Badge>
        </Theme>
        <Theme
          config={{
            yellow: {
              BadgeDot: {
                normal: {
                  position: { top: -5, right: -5 },
                  background: { color: "yellow" }
                }
              }
            }
          }}
        >
          <Badge viewClass="yellow">
            <Box />
          </Badge>
        </Theme>
        <Theme
          config={{
            blue: {
              BadgeDot: {
                normal: {
                  position: { top: -5, right: -5 },
                  background: { color: "blue" }
                }
              }
            }
          }}
        >
          <Badge viewClass="blue">
            <Box />
          </Badge>
        </Theme>
      </Wrapper>
    );
  }
}
