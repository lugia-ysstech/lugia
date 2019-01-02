import React from 'react';
import {Grid} from '@lugia/lugia-web';
const {Row, Col} = Grid;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
