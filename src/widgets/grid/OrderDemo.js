import React from 'react';
import {Row, Col} from '@lugia/lugia-web';

export default class GridDemo extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>
            </div>
        );
    }
}