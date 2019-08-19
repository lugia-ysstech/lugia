import React, {useState} from 'react';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import { Grid, Layout, Theme,BackTop,Button,Drawer,Icon } from '@lugia/lugia-web';
import Router from '../../router';
import styled from 'styled-components';
import PageLoading from '../../pageloading';
import Widget from "@lugia/lugia-web/dist/consts/index";
import Asides from '../menu';

import Headers from '../nav';


const InnerContainer = styled.div`
  width:100%;
  padding:0 20px ;
  text-align: center;
  overflow-x: hidden;
`;


const Container = styled.div`
  width:100%;
  position:${props => props.overflow?'fixed':''};
`;


export default () => {

  const rout = createRoute(Router.routerConfig, PageLoading);
  this.drawer = React.createRef();

  const [overflow, updateOverflowState] = useState(false);
  return (
    <React.Fragment>
      <Container overflow={overflow}>
        <Headers/>
        <Asides setOverflow={(res) => {
          updateOverflowState(res)
        }}/>
        <InnerContainer>{rout}</InnerContainer>
        <BackTop/>
      </Container>
    </React.Fragment>

  );
};

