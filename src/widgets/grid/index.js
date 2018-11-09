/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {Grid ,Row, Col} from '@lugia/lugia-web';
// const { Row, Col } = Grid;
const Wrapper = styled.div`
  & > div > div {
    padding: 8px;
    text-align: center;
  }
  & > div > div:nth-child(odd) {
    background: rgba(0, 160, 233, 0.7);
  }

  & > div > div:nth-child(even) {
    background: #00a0e9;
  }
`;

export default() => {
  return (
    <div>
      <Wrapper>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row>
          <Col span={6}>col-6</Col>
          {123}
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row>
          <Col span={18} push={6}>
            col-18 col-push-6
          </Col>
          <Col span={6} pull={18}>
            col-6 col-pull-18
          </Col>
        </Row>
      </Wrapper>
      <br />
      <p>type: flex, justify</p>
      <Wrapper>
        <Row type="flex" justify="start">
          <Col span={4}>col-4 justify-start</Col>
          <Col span={4}>col-4 justify-start</Col>
          <Col span={4}>col-4 justify-start</Col>
          <Col span={4}>col-4 justify-start</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="center">
          <Col span={4}>col-4 justify-center</Col>
          <Col span={4}>col-4 justify-center</Col>
          <Col span={4}>col-4 justify-center</Col>
          <Col span={4}>col-4 justify-center</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="end">
          <Col span={4}>col-4 justify-end</Col>
          <Col span={4}>col-4 justify-end</Col>
          <Col span={4}>col-4 justify-end</Col>
          <Col span={4}>col-4 justify-end</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="spaceBetween">
          <Col span={4}>col-4 justify-spaceBetween</Col>
          <Col span={4}>col-4 justify-spaceBetween</Col>
          <Col span={4}>col-4 justify-spaceBetween</Col>
          <Col span={4}>col-4 justify-spaceBetween</Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="spaceAround">
          <Col span={4}>col-4 justify-spacAround</Col>
          <Col span={4}>col-4 justify-spacAround</Col>
          <Col span={4}>col-4 justify-spacAround</Col>
          <Col span={4}>col-4 justify-spacAround</Col>
        </Row>
      </Wrapper>
      <br />
      <p>type: flex, align</p>
      <Wrapper>
        <Row type="flex" justify="start" align="top">
          <Col span={4}>
            <div style={{ height: 80 }}>col-4 align-top</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 60 }}>col-4 align-top</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 100 }}>col-4 align-top</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 120 }}>col-4 align-top</div>
          </Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="center" align="middle">
          <Col span={4}>
            <div style={{ height: 80 }}>col-4 align-middle</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 60 }}>col-4 align-middle</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 100 }}>col-4 align-middle</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 120 }}>col-4 align-middle</div>
          </Col>
        </Row>
      </Wrapper>
      <br />
      <Wrapper>
        <Row type="flex" justify="end" align="bottom">
          <Col span={4}>
            <div style={{ height: 80 }}>col-4 align-bottom</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 60 }}>col-4 align-bottom</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 100 }}>col-4 align-bottom</div>
          </Col>
          <Col span={4}>
            <div style={{ height: 120 }}>col-4 align-bottom</div>
          </Col>
        </Row>
      </Wrapper>
      <br />
      <p>type: flex, order</p>
      <Wrapper>
        <Row type="flex" justify="center">
          <Col span={4} order={3}>
            col-4 center-order-3
          </Col>
          <Col span={4} order={2}>
            col-4 center-order-2
          </Col>
          <Col span={4} order={1}>
            col-4 center-order-1
          </Col>
          <Col span={4} order={4}>
            col-4 center-order-4
          </Col>
        </Row>
      </Wrapper>
      <br />
      <div style={{ width: '1200px' }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, xl: 24, lg: 24 }}>
          <Col span={6}>
            <div style={{ background: 'rgba(0, 160, 233, 0.7)' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: ' #00a0e9' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: 'rgba(0, 160, 233, 0.7)' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: ' #00a0e9' }}>col-6</div>
          </Col>
        </Row>
      </div>
      <br />
      <div style={{ width: '1200px' }}>
        <Row gutter={24}>
          <Col span={6}>
            <div style={{ background: 'rgba(0, 160, 233, 0.7)' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: ' #00a0e9' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: 'rgba(0, 160, 233, 0.7)' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: ' #00a0e9' }}>col-6</div>
          </Col>
        </Row>
      </div>
      <br />
      <Wrapper>
        <p>响应式</p>
        <Row>
          <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>
            col-
          </Col>
          <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>
            col-
          </Col>
          <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>
            col-
          </Col>
          <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>
            col-
          </Col>
        </Row>
      </Wrapper>
      <br />
    </div>
  );
};
