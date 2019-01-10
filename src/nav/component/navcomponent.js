/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import { Tabs, Theme } from '@lugia/lugia-web';
import '../../css/menu.css';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import { designRouter } from '../../App';
import logo from '../../../public/lugia-logo.png';
import Search from '../../search';

const TabPane = Tabs.TabPane;
const getchildren =router => {
  const arr =[];
  for(const i in router){
    const {isHidden,text,url} = router[i];
    if(!isHidden){
      arr.push(<TabPane title={text}  activityKey={url} />);
    }
  }

  return arr;
} ;

const Wrapper = styled.div`
  text-align: left;
  float:right;
  margin-right:80px;
  position:relative;
`;

const Header = styled.div`
  height: 80px;
  line-height: 60px;
  align-item:middle;
`;

const Logo = styled.img`
  margin:10px 12px 0 10px;
  height:60%;
  float:left;
`;

const Language = styled.div`
  margin:0 12px 0 0;
  height:100%;
  float:right;
`;

const SearchBox = styled.div`
 float:left;
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

    const path = '/'+window.location.pathname.match(/[^/]+/)[0];
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
    const view = {
      [Widget.Tabs]: {
        width: 340,
        height: 60,
      },
    };
    const {current} = this.state;
    return (
        <Header>
          <Logo src={logo} alt=""/>
          <SearchBox><Search/></SearchBox>
          <Language>English | </Language>
          <Theme config={view}>
          <Wrapper>
            <Tabs
              onTabClick={this.onTabClick}
              defaultActivityKey={current}
              children={getchildren(designRouter)}
            />
          </Wrapper>
          </Theme>

        </Header>
    );
  }
  onTabClick = res => {
    const { onTabClick } = this.props;
    onTabClick && onTabClick(res);
    go({ url: res });
  };


}
