/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import '../../../css/menu.css';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
import styled , { css,keyframes } from 'styled-components';
import { designRouter } from '../../../App';
import { Icon ,Trigger,Theme,Dropmenu} from '@lugia/lugia-web';
import logo from '../../../../public/lugia-logo.png';
import Widget from "@lugia/lugia-web/dist/consts/index";

const { themeColor } = colorsFunc();

const slideToRight = keyframes`
  0% {
    width:0;
  }
  100% {
   width:100%;
  }
`;

const TabPane = styled.li`
  font-size:16px;
  height: 36px;
  line-height: 36px;
  color:${props => (props.active?'#ffffff':'#50575D')};
  background:${props => (props.active?' linear-gradient(0deg, #4D68FF 0%, #8093FF 100%)':'transparent')};
  cursor:pointer;
  border-radius: 20px;
  text-align: center;
   position: relative;
    z-index: 1;
`;

const TabBox = styled.ul`
  width: 204px;
  box-shadow: 0 0 5px 0 rgba(77,104,255,0.20);
  padding: 8px 15px;
  background: #ffffff;
  
`;

const Triangle = styled.div`
    position:absolute;
    right: 10px;
    top: -10px;
    width: 20px;
    height: 20px;
    z-index: -1;
    background: #ffffff;
    transform: rotate(135deg);
    box-shadow: 0 0 5px 0 rgba(77,104,255,0.20);
`;

const TriangleMask = styled.div`
    position:absolute;
    right: 10px;
    top: -10px;
    width: 20px;
    height: 20px;
    z-index: 0;
    background: #ffffff;
    transform: rotate(135deg);
`;

const Header = styled.div`
  height: 60px;
  line-height: 60px;
  align-item:middle;
  position: relative;
  z-index: 2;
`;

const Logo = styled.img`
  margin:10px 12px 0 10px;
  height:60%;
  float:left;
  cursor:pointer
`;

const MenuIcon = styled.div`
  margin:0 21px 0 0;
  height:100%;
  float:right;
  font-size: 20px;
`;


const HeadRight = styled.div`
  float:right;
  position: relative;
`;

type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

export default class Navcomponent extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {

    let path = window.location.hash.match(/[^(#|\/)]+/);
    path = path?'/'+path[0]:'/home';
    if (!stateProps) {
      return {
        current: path,
        isShowMenu:false
      };
    }
    return {
      current: 'current' in defProps ? path : stateProps.current,
    };
  }
  componentDidMount() {
  }

  componentWillUnmount() {

  }


  render() {
    const view = {
      [Widget.Dropmenu]: {
        width:500,
        zIndex: 9999999,
      },

    };
    const {current,isShowMenu} = this.state;
    return (
        <Header>
          <Logo src={logo} alt="" onClick={e => this.onTabClick('/home')}/>
          <HeadRight>
            <Theme config={view}>
              <Trigger
                offsetX={-80}
                action={['click']}
                popup={<div><TabBox>
                  {this.getchildren(designRouter,current)}
                </TabBox>
                  <Triangle/>
                  <TriangleMask/></div>}
              >
                <MenuIcon ><Icon iconClass={'lugia-icon-financial_omit'}/> </MenuIcon>
              </Trigger>
            </Theme>

          </HeadRight>

        </Header>
    );
  }
  onTabClick = res => {
    const { onTabClick } = this.props;
    onTabClick && onTabClick(res);
    go({ url: res });
  };
  getchildren = (router,current) => {
    const arr =[];
    for(const i in router){
      const {isHidden} = router[i];
      if(!isHidden){
        const {text,url} = router[i];
        arr.push(<TabPane title={text} active={current === url} onClick={e => this.onTabClick(url)}>{text}</TabPane>);
      }
    }
    return arr;
  } ;


}
