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
                <Row>
                    <Col span={6} offset={6}>
                      <OddItem>col-6 col-offset-6</OddItem>
                    </Col>
                    <Col span={6} offset={6}>
                      <EvenItem>col-6 col-offset-6</EvenItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
