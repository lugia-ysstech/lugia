import React from 'react';
import { createBrowserHistory } from 'history';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Grid, Layout, Theme} from '@lugia/lugia-web';
import Router from '../router';

import Asides from '../menu';


const { Row, Col } = Grid;
const rout = createRoute(Router.designRouter);

export default () => {
  return (
    <Row>
      <Col span={6}  xl={{ span: 4 }}  xxl={{ span: 5 }}>
        <Asides />
      </Col>
      <Col span={18} xl={{ span: 20 }}  xxl={{ span: 19 }}>
        {rout}
      </Col>
    </Row>

  );
};

