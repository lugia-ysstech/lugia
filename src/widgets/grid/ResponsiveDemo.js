import React from 'react';
import {Row, Col} from '@lugia/lugia-web';

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