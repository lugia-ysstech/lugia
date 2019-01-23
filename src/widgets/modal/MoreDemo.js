import React from 'react';
import {Button,Modal} from '@lugia/lugia-web';

export default class ModalDemo extends React.Component {

    render() {
        return (
            <div>
                <Button type="primary" onClick={() => Modal.info({ title: 'info', content: 'this is info text!' })}>
                    info
                </Button>&nbsp;&nbsp;
                <Button type="success" onClick={() => Modal.success({ title: 'success', content: 'this is success text!' })}>
                    success
                </Button>&nbsp;&nbsp;
                <Button type="danger" onClick={() => Modal.error({ title: 'error', content: 'this is error text!' })}>
                    error
                </Button>&nbsp;&nbsp;
                <Button type="warning" onClick={() => Modal.warning({ title: 'warning', content: 'this is warning text!' })}>
                    warning
                </Button>
            </div>
        );
    }
}
