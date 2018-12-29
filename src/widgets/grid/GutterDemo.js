import React from 'react';
import {Row, Col} from '@lugia/lugia-web';

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
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
        );
    }
}