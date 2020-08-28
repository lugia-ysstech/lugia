/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import '../../css/menu.css';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
import styled , { css,keyframes } from 'styled-components';
import { designRouter } from '../../App';
import logo from '../../../public/lugia-logo.png';
import Search from '../../search';

const { themeColor } = colorsFunc();

const Wrapper = styled.div`
  text-align: left;
  float:right;
  margin-right:80px;
  position:relative;
`;



const slideToRight = keyframes`
  0% {
    width:0;
  }
  100% {
   width:100%;
  }
`;

const slideToRightAnimation = css`
    ${slideToRight} 0.2s cubic-bezier(.57,.12,.35,.59) forwards;
  `;

const TabPane = styled.span`
  font-size:16px;
  color:${props => (props.active?themeColor:'#36384d')};
  margin:0 14px;
  cursor:pointer;
  display:inline-block;
  position:relative;
  &::after{
    display:${props => (props.active?'block':'none')};
    content:"";
    position:absolute;
    bottom:8px;
    width:100%;
    height:2px;
    border-radius:2px;
    background:${themeColor};
    animation: ${slideToRightAnimation} ;
  }
`;

const TabBox = styled.div`
  
`;

const Header = styled.div`
  height: 60px;
  line-height: 60px;
  align-item:middle;
`;

const Logo = styled.img`
  margin:10px 12px 0 10px;
  height:60%;
  float:left;
  cursor:pointer
`;

/*
// 暂时隐藏(勿删)
const Language = styled.div`
  margin: 0 12px 0 0;
  height: 100%;
  float: right;
`;
*/

const SearchBox = styled.div`
  float: left;
`;

/*
// 暂时隐藏(勿删)
const HeadRight = styled.div`
  float:right;
  display:flex;
  align-items:center;
  margin-left
`;

const ThemeColor = styled.span`
  background: ${themeColor};
  width: 16px;
  height: 16px;
  border-radius: 5px;
`;
*/


type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

export default class Navcomponent extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {

    const path = '/'+window.location.hash.match(/[^(#|\/)]+/)[0];
    if (!stateProps) {
      return {
        current:path,
      };
    }
    return {
      current: 'current' in defProps ? path : stateProps.current,
    };
  }

  render() {
    const {current} = this.state;
    return (
        <Header>
          <Logo src={logo} alt="" onClick={e => this.onTabClick('/home')}/>
          <SearchBox><Search/></SearchBox>
          {/*
            // 暂时隐藏(勿删)
            <HeadRight>
              <Language>English</Language>
              <Language>|</Language>
              <ThemeColor/>
            </HeadRight>
          */}
          <Wrapper>
            <TabBox>
              {this.getchildren(designRouter,current)}
            </TabBox>
          </Wrapper>

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
