import React from 'react';
import {Grid} from '@lugia/lugia-web';
const {Row, Col} = Grid;
export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col span={4}>col-4 justify-start</Col>
                    <Col span={4}>col-4 justify-start</Col>
                    <Col span={4}>col-4 justify-start</Col>
                    <Col span={4}>col-4 justify-start</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={4}>col-4 justify-center</Col>
                    <Col span={4}>col-4 justify-center</Col>
                    <Col span={4}>col-4 justify-center</Col>
                    <Col span={4}>col-4 justify-center</Col>
                </Row>
                <Row type="flex" justify="end">
                    <Col span={4}>col-4 justify-end</Col>
                    <Col span={4}>col-4 justify-end</Col>
                    <Col span={4}>col-4 justify-end</Col>
                    <Col span={4}>col-4 justify-end</Col>
                </Row>
                <Row type="flex" justify="spaceBetween">
                    <Col span={4}>col-4 justify-spaceBetween</Col>
                    <Col span={4}>col-4 justify-spaceBetween</Col>
                    <Col span={4}>col-4 justify-spaceBetween</Col>
                    <Col span={4}>col-4 justify-spaceBetween</Col>
                </Row>
                <Row type="flex" justify="spaceAround">
                    <Col span={4}>col-4 justify-spacAround</Col>
                    <Col span={4}>col-4 justify-spacAround</Col>
                    <Col span={4}>col-4 justify-spacAround</Col>
                    <Col span={4}>col-4 justify-spacAround</Col>
                </Row>
            </div>
        );
    }
}
