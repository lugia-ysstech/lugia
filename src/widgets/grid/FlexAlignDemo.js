import React from 'react';
import {Grid} from '@lugia/lugia-web';
const {Row, Col} = Grid;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}
