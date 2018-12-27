import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import {Layout,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

import Asides from "./header";
import routerConfig from "./router";

const { Header, Content, Footer, Aside } = Layout;

const rout = createRoute(routerConfig);

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

const header = (
  <div style={{ height: '60px', lineHeight: '60px', textAlign: 'center', background: '#381be5' }}>
    Header
  </div>
);

export default () => {
  const layoutView = {
    [Widget.Layout]: {
    },
    [Widget.Content]: {
      width:900,
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 10,
      },
      bordeLeftWidth:1,
      bordeLeftColor:'#cccccc',
      bordeLeftStyle:'solid'
    },
    [Widget.Aside]: {
      width:250,
      backgroundColor:"transparent"
    },
  };

  return (
    <div style={styles}>
      <Layout>
        <Header>{header}</Header>
        <Theme config={layoutView}>
          <Layout direction="row">
            <Aside><Asides/></Aside>
            <Content>{rout}</Content>
          </Layout>
        </Theme>
        <Footer>{footer}</Footer>
      </Layout>

    </div>
  );
};

const styles = {
  width: "1140px",
  height: "100%",
  margin: "0 auto",
};
