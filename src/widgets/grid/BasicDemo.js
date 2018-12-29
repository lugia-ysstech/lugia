import React from 'react';
import {Row, Col} from '@lugia/lugia-web';

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        );
    }
}