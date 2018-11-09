/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import {Divider} from '@lugia/lugia-web';

const Wrapper = styled.div`
  margin-left: 50px;
`;
export default () => {
  return (
    <div>
      <Wrapper>
        <p>solid </p>
        <Divider content={'solid'} type="horizontal" />
        <p>dashed</p>
        <Divider dashed={true} content={'dashed'} />
      </Wrapper>
      <Wrapper>
        <p>position left</p>
        <Divider content="position left" position="left" />
        <p>position right</p>
        <Divider content="position right" position="right" />
        <Divider />
        <p>"不用思考.因为我帮你想好了",这是lugia设计的重要原则之一.</p>
        <Divider />
      </Wrapper>
      <Wrapper>
        <p>type vertical</p>
        <div style={{ height: 20 }}>
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
        </div>
      </Wrapper>
    </div>
  );
};
