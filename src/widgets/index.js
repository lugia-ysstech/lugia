import React from 'react';
import { createBrowserHistory } from 'history';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Grid, Layout, Theme} from '@lugia/lugia-web';
import Router from '../router';
import Asides from '../menu';
import styled from 'styled-components';
import Headers from '../nav';

const { Content} = Layout;
const { Row, Col } = Grid;


const InnerContainer = styled.div`
  width:100%;
  padding:45px 50px 50px;
`;

const Block = styled.div`
  height:60px;
`;


export default () => {
  const rout = createRoute(Router.routerConfig);
  return (
    <React.Fragment>
      <Row>
        <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
          <Block/>
        </Col>
        <Col span={24}  xl={{ span: 22 }}  xxl={{ span: 20 }}>
          <Headers />
          <Row>
            <Col span={6}  xl={{ span: 4 }}  xxl={{ span: 5 }}>
              <Asides />
            </Col>
            <Col span={18} xl={{ span: 20 }}  xxl={{ span: 19 }}>
              <InnerContainer>{rout}</InnerContainer>
            </Col>
          </Row>
        </Col>
        <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
          <Block/>
        </Col>
      </Row>

    </React.Fragment>

  );
};

