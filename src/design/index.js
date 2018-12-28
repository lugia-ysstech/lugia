import React from "react";
import { createBrowserHistory } from "history";
import { createRoute } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import Widget from "@lugia/lugia-web/dist/consts/index";
import {Layout,Theme} from '@lugia/lugia-web';
import Router from "../router";

import Asides from "../menu";


const rout = createRoute(Router.designRouter);

const { Content,  Aside } = Layout;

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
    <div >
      <Theme config={layoutView}>
        <Layout direction="row">
          <Aside><Asides /></Aside>
          <Content>{rout}</Content>
        </Layout>
      </Theme>

    </div>
  );
};

