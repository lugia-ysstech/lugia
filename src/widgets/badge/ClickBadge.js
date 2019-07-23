import React from 'react';
import { Badge, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from "@lugia/lugia-web/dist/consts";

const Wrapper = styled.div`
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class ClickBadge extends React.Component<any, any> {

  render () {
    const dot = {
      [Widget.Badge]: {
        BadgeDot: {
          normal: {
            position: { top: -5, right: 2 },
          }
        },
      }
    };
    return (
      <Wrapper>
        <a href="/component/badge">
            <Theme config={dot}>
              <Badge  >
                <Box />
              </Badge>
            </Theme>
        </a>
      </Wrapper>);
  }
}
