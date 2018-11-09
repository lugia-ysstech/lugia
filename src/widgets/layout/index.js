/**
 *
 * create by guorg
 *
 * @flow
 */
import React from 'react';
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Theme,Layout} from '@lugia/lugia-web';

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
const aside = (
  <div
    style={{
      height: '200px',
      lineHeight: '200px',
      width: '200px',
      textAlign: 'center',
      background: '#11b4ff',
    }}
  >
    Aside
  </div>
);

export default () => {
  const layoutView = {
    [Widget.Layout]: {
      width: 500,
      margin: {
        top: 20,
        bottom: 30,
        left: 50,
        right: 40,
      },
    },
    [Widget.Header]: {
      margin: {
        top: 10,
        bottom: 10,
        left: 20,
        right: 20,
      },
    },
    [Widget.Footer]: {
      margin: {
        top: 10,
        bottom: 10,
        left: 20,
        right: 20,
      },
    },
    [Widget.Content]: {
      margin: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
  };
  return (
    <div>
      <p>default flex-direction: column;</p>
      <Layout>
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
      <p>flex-direction: row;</p>
      <Layout>
        <Header>{header}</Header>
        <Layout direction="row">
          <Aside>{aside}</Aside>
          <Content>{content}</Content>
        </Layout>
        <Footer>{footer}</Footer>
      </Layout>
      <p>flex-direction: row;</p>
      <Layout>
        <Header>{header}</Header>
        <Layout direction="row">
          <Content>{content}</Content>
          <Aside>{aside}</Aside>
        </Layout>
        <Footer>{footer}</Footer>
      </Layout>
      <p>flex-direction: row;</p>
      <Layout direction="row">
        <Aside>
          <div
            style={{
              height: '320px',
              lineHeight: '200px',
              width: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
      </Layout>
      <p>flex-direction: row;</p>
      <Layout direction="row">
        <Aside>
          <div
            style={{
              height: '320px',
              lineHeight: '200px',
              width: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
        <Aside>
          <div
            style={{
              height: '320px',
              lineHeight: '200px',
              width: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
      </Layout>
      <p>flex-direction: row; Aside collapsible</p>
      <Layout direction="row">
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
        <Aside collapsible reverseArrow>
          <div>Aside</div>
        </Aside>
      </Layout>
      <p>flex-direction: row; Aside collapsible</p>
      <Layout direction="row">
        <Aside collapsible breakpoint={'lg'}>
          <div>Aside</div>
        </Aside>
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
      </Layout>
      <p>flex-direction: row; Aside collapsible</p>
      <Theme config={{ [Widget.Aside]: { backgroundColor: 'red' } }}>
        <Layout direction="row">
          <Layout>
            <Header>{header}</Header>
            <Content>{content}</Content>
            <Footer>{footer}</Footer>
          </Layout>
          <Aside collapsible reverseArrow>
            <div>Aside</div>
          </Aside>
        </Layout>
      </Theme>
      <p>theme</p>
      <Theme config={layoutView}>
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
      </Theme>
      <p>flex-direction: row;</p>
      <Theme config={{ [Widget.Layout]: { width: 500, height: 500 } }}>
        <Layout direction="row" needEnlarge>
          <Aside>
            <div
              style={{
                height: '320px',
                lineHeight: '200px',
                width: '200px',
                textAlign: 'center',
                background: '#11b4ff',
              }}
            >
              Aside
            </div>
          </Aside>
          <Layout>
            <Header value="header">
              <div style={{ background: '#381be5', height: '100%' }}>heder</div>
            </Header>
            <Content value="content" enlarged>
              <div style={{ background: '#0F89FF', height: '300px' }}>content</div>
            </Content>
            <Footer value="footer">
              <div style={{ background: '#0f13ff', height: '100%' }}>footer</div>
            </Footer>
          </Layout>
        </Layout>
      </Theme>
      <p>flex-direction: row;</p>
      <Theme config={{ [Widget.Layout]: { width: 500, height: 500 } }}>
        <Layout direction="row">
          <Aside>
            <div
              style={{
                height: '320px',
                lineHeight: '200px',
                width: '200px',
                textAlign: 'center',
                background: '#11b4ff',
              }}
            >
              Aside
            </div>
          </Aside>
          <Layout needEnlarge>
            <Header value="header" enlarged>
              <div style={{ background: '#381be5', height: '50px' }}>heder</div>
            </Header>
            <Content value="content">
              <div style={{ background: '#0F89FF', height: '200px' }}>content</div>
            </Content>
            <Footer value="footer">
              <div style={{ background: '#0f13ff', height: '50px' }}>footer</div>
            </Footer>
          </Layout>
        </Layout>
      </Theme>
      <p>flex-direction: row;</p>
      <Theme config={{ [Widget.Layout]: { width: 500, height: 500 } }}>
        <Layout direction="row" needEnlarge>
          <Aside>
            <div
              style={{
                height: '320px',
                lineHeight: '200px',
                width: '200px',
                textAlign: 'center',
                background: '#11b4ff',
              }}
            >
              Aside
            </div>
          </Aside>
          <Layout>
            <Header enlarged>
              <div style={{ background: '#381be5', height: '100%' }}>heder</div>
            </Header>
            <Content>
              <Layout direction="row">
                <Header enlarged value="header">
                  <div style={{ width: '100%', background: '#45e520', height: '100%' }}>
                    好好好好
                  </div>
                </Header>
                <Content enlarged>
                  <div style={{ background: '#ff7d62', height: '100%' }}>好</div>
                </Content>
                <Footer enlarged value={'footer'}>
                  <div style={{ width: '100%', background: '#a42dff', height: '100%' }}>
                    好好好好
                  </div>
                </Footer>
              </Layout>
            </Content>
            <Footer enlarged>
              <div style={{ background: '#0f13ff', height: '100%' }}>footer</div>
            </Footer>
          </Layout>
        </Layout>
      </Theme>
    </div>
  );
};
export class AsideDemo extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Aside collapsible>
          <div
            style={{
              height: '200px',
              lineHeight: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <p>collapsible trigger=null</p>
        <Aside collapsible trigger={null}>
          <div
            style={{
              height: '200px',
              lineHeight: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <p>collapsible collapsed=true trigger="hello"</p>
        <Aside collapsible collapsed={true} trigger="hello">
          <div
            style={{
              height: '200px',
              lineHeight: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <p>collapsible defaultCollapsed=true trigger="hello"</p>
        <Aside
          collapsible
          defaultCollapsed={true}
          breakpoint={'lg'}
          reverseArrow
          collapsedWidth={120}
        >
          <div
            style={{
              height: '200px',
              lineHeight: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
        <p>
          collapsible breakpoint={'lg'} collapsedWidth={64}
        </p>
        <Aside
          collapsible
          breakpoint={'lg'}
          collapsedWidth={64}
          onBreakpoint={() => console.info('1111')}
        >
          <div
            style={{
              height: '200px',
              lineHeight: '200px',
              textAlign: 'center',
              background: '#11b4ff',
            }}
          >
            Aside
          </div>
        </Aside>
      </div>
    );
  }
}
