import React from 'react';
import { createBrowserHistory } from 'history';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Grid, Layout, Theme} from '@lugia/lugia-web';
import Router from '../router';
import Asides from '../menu';
import styled from 'styled-components';

const { Content} = Layout;
const { Row, Col } = Grid;


const InnerContainer = styled.div`
  width:100%;
  padding:45px 50px 50px;
`;

export default () => {
  const rout = createRoute(Router.routerConfig);
  return (
      <Row>
        <Col span={6}  xl={{ span: 4 }}  xxl={{ span: 5 }}>
          <Asides />
        </Col>
        <Col span={18} xl={{ span: 20 }}  xxl={{ span: 19 }}>
          <InnerContainer>{rout}</InnerContainer>
        </Col>
      </Row>
  );
};

