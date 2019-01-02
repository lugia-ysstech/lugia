import React from 'react';
import {Grid} from '@lugia/lugia-web';
const {Row, Col} = Grid;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
