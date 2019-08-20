import React, {useState} from 'react';
import '@lugia/lugia-web/dist/css/global.css';
import {  Theme,Drawer,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from "@lugia/lugia-web/dist/consts/index";
import Asides from '../../menu';

const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  color:#50575D;
  float:right;
  font-size: 22px;
  position: fixed;
  top: 60px;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 0 10px 0 rgba(80,87,93,0.30);
  z-index: 1000;
`;


export default (props) => {
  const view = {
    [Widget.Drawer]: {
      width: 285,
      padding: 0,
    },
  };
  this.drawer = React.createRef();
  const {setOverflow, ignoreGo, onSelect} = props;
  const [drawerVisible, updateDrawerVisible] = useState(false);
  const [overflow, updateOverflowState] = useState(false);

  const onClick = (e) => {
    updateDrawerVisible(!drawerVisible);
    updateOverflowState(!overflow);
    setOverflow && setOverflow(!overflow);
  };

  const {data} = props;
  return (
    <React.Fragment>
          <MenuIcon onClick={onClick}><Icon iconClass={'lugia-icon-financial_more'}/> </MenuIcon>
          <Theme config={view}>
            <Drawer placement={'left'} onClose={onClick} closable visible={drawerVisible} ref={node => (this.drawer = node)} >
              {
                drawerVisible?<Asides data={data} width={250} padding={{top:0,left:0,right:0,bottom:0}} isMobile={true} ignoreGo={ignoreGo} onSelect={(target) => {
                  onClick();
                  onSelect && onSelect(target) ;
                }}/>:''
              }

            </Drawer>
          </Theme>

    </React.Fragment>

  );
};

