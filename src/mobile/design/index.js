import React ,{useState} from 'react';
import { createRoute } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import { Layout,Drawer,Button,Theme } from '@lugia/lugia-web';
import Router from '../../router';
import Headers from '../nav';
import Asides from '../menu';
import PageLoading from '../../pageloading';
import styled from "styled-components";


const rout = createRoute(Router.designRouterMobile, PageLoading);


const Container = styled.div`
  width:100%;
  position:${props => props.overflow?'fixed':''};
`;

export default () => {
  const [overflow, updateOverflowState] = useState(false);
  return (
    <Container overflow={overflow}>
      <Headers/>
      <Asides setOverflow={(res) => {
        updateOverflowState(res)
      }} />
      {rout}
    </Container>
  );
};

