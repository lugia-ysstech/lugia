import React from 'react';
import { Divider } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div``;
const DividerContent = styled.div`
  line-height: 1.5;
  padding: 0 10px;
`;
export default class ContentDivider extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Divider />
        <DividerContent>
          "不用思考.因为我帮你想好了",这是lugia设计的重要原则之一.
        </DividerContent>
        <Divider />
      </Wrapper>
    );
  }
}
