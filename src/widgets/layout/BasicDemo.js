import React from 'react';
import {Layout} from '@lugia/lugia-web';

const { Header, Content, Footer, Aside } = Layout;
const header = (
    <div style={{ height: '60px', lineHeight: '60px', textAlign: 'center', background: '#381be5' }}>
        Header
    </div>
);
const content = (
    <div
        style={{
            height: '200px',
            lineHeight: '200px',
            textAlign: 'center',
            background: '#0F89FF',
        }}
    >
        Content
    </div>
);
const footer = (
    <div
        style={{
            height: '60px',
            lineHeight: '60px',
            textAlign: 'center',
            background: '#0f13ff',
        }}
    >
        Footer
    </div>
);

export default class LayoutDemo extends React.Component {
    render() {
        return (
            <Layout>
                <Header>{header}</Header>
                <Content>{content}</Content>
                <Footer>{footer}</Footer>
            </Layout>
        );
    }
}
