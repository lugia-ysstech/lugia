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
`;
const EvenItem = styled(Common)`
  background-color: rgba(128, 129, 255);
`;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={4} order={3}>
                      <OddItem>col-4 order-3</OddItem>
                    </Col>
                    <Col span={4} order={2}>
                      <EvenItem>col-4 order-2</EvenItem>
                    </Col>
                    <Col span={4} order={1}>
                      <OddItem>col-4 order-1</OddItem>
                    </Col>
                    <Col span={4} order={4}>
                      <EvenItem>col-4 order-4</EvenItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
