import React from 'react';
import {Button,Modal} from '@lugia/lugia-web';

export default class ModalDemo extends React.Component {

    render() {
        return (
            <Button onClick={() => Modal.confirm({ title: 'confirm', content: 'this is confirm text!' })}>
                confirm
            </Button>
        );
    }
}