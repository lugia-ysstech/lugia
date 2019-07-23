import React from 'react';
import {Grid} from '@lugia/lugia-web';
import styled from 'styled-components';
const {Row, Col} = Grid;

const Common = styled.div`
  text-align: center;
  line-height: 50px;
`;
const OddItem = styled(Common)`
  background-color: rgba(77, 99, 255, 0.5);
  height: 100px;
`;
const EvenItem = styled(Common)`
  background-color: rgba(128, 129, 255);
  height: 60px;
`;
const Title = styled.p`
  background: #fbf8f8;
  padding:10px;
`;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Title>align: top</Title>
                <Row type="flex" justify="start" align="top">
                    <Col span={4}>
                      <OddItem>col-4 align-top</OddItem>
                    </Col>
                    <Col span={4}>
                      <EvenItem>col-4 align-top</EvenItem>
                    </Col>
                    <Col span={4}>
                      <OddItem>col-4 align-top</OddItem>
                    </Col>
                    <Col span={4}>
                      <EvenItem>col-4 align-top</EvenItem>
                    </Col>
                </Row>
                <Title>align: middle</Title>
                <Row type="flex" justify="center" align="middle">
                    <Col span={4}>
                        <OddItem>col-4 align-middle</OddItem>
                    </Col>
                    <Col span={4}>
                        <EvenItem>col-4 align-middle</EvenItem>
                    </Col>
                    <Col span={4}>
                        <OddItem>col-4 align-middle</OddItem>
                    </Col>
                    <Col span={4}>
                        <EvenItem>col-4 align-middle</EvenItem>
                    </Col>
                </Row>
                <Title>align: bottom</Title>
                <Row type="flex" justify="end" align="bottom">
                    <Col span={4}>
                        <OddItem>col-4 align-bottom</OddItem>
                    </Col>
                    <Col span={4}>
                        <EvenItem>col-4 align-bottom</EvenItem>
                    </Col>
                    <Col span={4}>
                        <OddItem>col-4 align-bottom</OddItem>
                    </Col>
                    <Col span={4}>
                        <EvenItem>col-4 align-bottom</EvenItem>
                    </Col>
                </Row>

            </div>
        );
    }
}
