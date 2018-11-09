import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import {Layout,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

import Asides from "./header";
import Todo from "./todo";
import Tomato from "./tomato";
import NotAccess from "./access/NotAccess";
import Affix from "./widgets/affix";
import Alert from "./widgets/alert";
import Align from "./widgets/align";
import Amountinput from "./widgets/amountinput";
import Autocomplete from "./widgets/autocomplete";
import BackTop from "./widgets/back-top";
import Avatar from "./widgets/avatar";
import Badge from "./widgets/badge";
import Breadcrumb from "./widgets/breadcrumb";
import Button from "./widgets/button";
import CheckButton from "./widgets/check-button";
import Checkbox from "./widgets/checkbox";
import Collapse from "./widgets/collapse";
import Divider from "./widgets/divider";
import Grid from "./widgets/grid";
import Icon from "./widgets/icon";
import Input from "./widgets/input";
import Layouts from "./widgets/layout";
import Loading from "./widgets/loading";
import Message from "./widgets/message";
import Modal from "./widgets/modal";
import Notifications from "./widgets/notification";
import Numberinput from "./widgets/numberinput";
import Progress from "./widgets/progress";
import Radio from "./widgets/radio";
import Scroller from "./widgets/scroller";
import Select from "./widgets/select";
import Slider from "./widgets/slider";
import Switch from "./widgets/switch";
import Tabs from "./widgets/tabs";
import Tag from "./widgets/tag";
import Tooltip from "./widgets/tooltip";
import Tree from "./widgets/tree";
import Trigger from "./widgets/trigger";
const { Header, Content, Footer, Aside } = Layout;

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
const rout = createRoute({
  "/affix": {
    exact: true,
    component: Affix
  },
  "/alert": {
    component: Alert
  },
  "/align": {
    component: Align
  },
  "/amountinput": {
    component: Amountinput
  },
  "/autocomplete": {
    component: Autocomplete
  },
  "/avatar": {
    component: Avatar
  },
  "/backtop": {
    component: BackTop
  },
  "/badge": {
    component: Badge
  },
  "/breadcrumb": {
    component: Breadcrumb
  },
  "/button": {
    component: Button
  },
  "/checkbutton": {
    component: CheckButton
  },
  "/checkbox": {
    component: Checkbox
  },
  "/collapse": {
    component: Collapse
  },
  "/divider": {
    component: Divider
  },
  "/grid": {
    component: Grid
  },
  "/icon": {
    component: Icon
  },
  "/input": {
    component: Input
  },
  "/layout": {
    component: Layouts
  },
  "/loading": {
    component: Loading
  },
  "/message": {
    component: Message
  },
  "/modal": {
    component: Modal
  },
  "/notification": {
    component: Notifications
  },
  "/numberinput": {
    component: Numberinput
  },
  "/progress": {
    component: Progress
  },
  "/radio": {
    component: Radio
  },
  "/scroller": {
    component: Scroller
  },
  "/select": {
    component: Select
  },
  "/slider": {
    component: Slider
  },
  "/switch": {
    component: Switch
  },
  "/tabs": {
    component: Tabs
  },
  "/tag": {
    component: Tag
  },
  "/tooltip": {
    component: Tooltip
  },
  "/tree": {
    component: Tree
  },
  "/trigger": {
    component: Trigger
  },
  "/404": {
    component: NotAccess,
    exact: true
  }
})
export default () => {
  console.info("init main");
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
      width:220,
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
const st = {
  // width: "220px",
  minHeight: "100vh",
  // border:'1px solid #ccc'
};
const styles = {
  width: "1140px",
  height: "100%",
  // border:'1px solid #ccc',
  // display: "flex",
  margin: "0 auto",
};
const rightstyles={
  // width:'calc( 100% - 220px )',
  // width:'100%',
  // overflowY:'auto',
  padding:'30px 30px 30px 250px',
  
  boxSizing:'border-box',
  position:'relative'
}
