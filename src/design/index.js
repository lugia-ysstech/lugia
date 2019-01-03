import React from 'react';
import { createBrowserHistory } from 'history';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Grid, Layout, Theme} from '@lugia/lugia-web';
import Router from '../router';
import Headers from '../nav';
import Asides from '../menu';


const { Row, Col } = Grid;
const rout = createRoute(Router.designRouter);

const block = (
  <div style={{ height: '60px'}}>
  </div>
);


export default () => {
  return (
    <React.Fragment>
      <Row>
        <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
          {block}
        </Col>
        <Col span={24}  xl={{ span: 22 }}  xxl={{ span: 20 }}>
          <Headers />
          <Row>
            <Col span={6}  xl={{ span: 4 }}  xxl={{ span: 5 }}>
              <Asides />
              {block}
            </Col>
            <Col span={18} xl={{ span: 20 }}  xxl={{ span: 19 }}>
              {rout}
            </Col>
          </Row>
        </Col>
        <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
          {block}
        </Col>
      </Row>

    </React.Fragment>
  );
};

