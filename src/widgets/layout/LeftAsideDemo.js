import React from 'react';
import {Layout} from '@lugia/lugia-web';

const { Header, Content, Footer, Aside } = Layout;
const header = (
    <div style={{ height: '60px', lineHeight: '60px', textAlign: 'center', background: '#F0F2FF' }}>
        Header
    </div>
);
const content = (
    <div
        style={{
            height: '200px',
            lineHeight: '200px',
            textAlign: 'center',
            background: '#B7C0FF',
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
            background: '#E6E9FF',
        }}
    >
        Footer
    </div>
);
const aside = (
    <div
        style={{
            height: '200px',
            lineHeight: '200px',
            width: '200px',
            textAlign: 'center',
            background: '#CCD4FF',
        }}
    >
        Aside
    </div>
);

export default class LayoutDemo extends React.Component {
    render() {
        return (
            <Layout>
                <Header>{header}</Header>
                <Layout direction="row">
                    <Aside>{aside}</Aside>
                    <Content>{content}</Content>
                </Layout>
                <Footer>{footer}</Footer>
            </Layout>
        );
    }
}
