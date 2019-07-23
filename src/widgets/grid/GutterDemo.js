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
                <Row gutter={24}>
                    <Col span={6}>
                        <OddItem>col-6</OddItem>
                    </Col>
                    <Col span={6}>
                        <EvenItem>col-6</EvenItem>
                    </Col>
                    <Col span={6}>
                        <OddItem>col-6</OddItem>
                    </Col>
                    <Col span={6}>
                        <EvenItem>col-6</EvenItem>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}>
                    <Col span={6}>
                        <OddItem>col-6</OddItem>
                    </Col>
                    <Col span={6}>
                        <EvenItem>col-6</EvenItem>
                    </Col>
                    <Col span={6}>
                        <OddItem>col-6</OddItem>
                    </Col>
                    <Col span={6}>
                        <EvenItem>col-6</EvenItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
