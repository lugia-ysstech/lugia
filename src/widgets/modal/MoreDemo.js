import React from 'react';
import {Button,Modal} from '@lugia/lugia-web';

export default class ModalDemo extends React.Component {

    render() {
        return (
            <div>
                <Button onClick={() => Modal.info({ title: 'info', content: 'this is info text!' })}>
                    info
                </Button>
                <Button onClick={() => Modal.success({ title: 'success', content: 'this is success text!' })}>
                    success
                </Button>
                <Button onClick={() => Modal.error({ title: 'error', content: 'this is error text!' })}>
                    error
                </Button>
                <Button onClick={() => Modal.warning({ title: 'warning', content: 'this is warning text!' })}>
                    warning
                </Button>
            </div>
        );
    }
}