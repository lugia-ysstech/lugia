import React from 'react';
import {Grid} from '@lugia/lugia-web';
const {Row, Col} = Grid;

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={6}>
                        col-6 col-offset-6
                    </Col>
                    <Col span={6} offset={6}>
                        col-6 col-offset-6
                    </Col>
                </Row>
            </div>
        );
    }
}
