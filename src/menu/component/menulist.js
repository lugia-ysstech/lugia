/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go, Link } from '@lugia/lugiax-router';
import { Button, Menu,Navmenu ,Theme} from '@lugia/lugia-web';
import '../../css/menu.css';
import Router from '../../router';
import Widget from '@lugia/lugia-web/dist/consts/index';
import { bindTo, connect } from '@lugia/lugiax';
import styled from 'styled-components';

const getMenuItems = (data:Object) => {
  const arr =[];
  for(const item in data){
    const {text,value} = data[item];
    const obj= {
      value,
      text: text || value,
    };

    const {icon,describe} = data[item];
    if(icon){
      obj.icon =icon;
    }
    if(describe){
      obj.describe =describe;
    }

    const children = data[item].children;
    let childArr = [];
    if(children){
      childArr = getMenuItems(children);
    }
    if(childArr.length){
      obj.children = childArr;
    }

    const {isHidden} = data[item];
    if(!isHidden){
      arr.push(obj);
    }

  }
  return arr;
};

const isInString = (target, key) => {
  return target.indexOf(key) !== -1;
};

const Container = styled.div`
  padding:${props => (props.fixed?'0':'42px 0 10px')};
  position:${props => (props.fixed?'fixed':'relative')};
  top:0;
  width:260px;
  height:${props => (props.height+'px')}
`;

type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

function getScrollTop(): number {
  let scrollPos;
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset;
  } else if (document.compatMode && document.compatMode != 'BackCompat') {
    scrollPos = document.documentElement && document.documentElement.scrollTop;
  } else if (document.body) {
    scrollPos = document.body.scrollTop;
  }
  return scrollPos || 0;
}


export default class MenuList extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathFilter = path.match(/[^/]+/g);
    const pathType = pathFilter[0]==='design'?'designConfig':'menuConfig';
    const defaultUrl = Router[pathType][0].children?Router[pathType][0].children[0].value:Router[pathType][0].value;
    const defCurrent = pathFilter.length>1 ?path:defaultUrl;
    if (!stateProps) {
      return {
        current:defCurrent,
        routerType:pathType
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
      routerType:'routerType' in stateProps?stateProps.routerType:pathType
    };
  }

  componentDidMount () {
    this.getWindowHeight();
    window.addEventListener('scroll', this.addWindowListener);
    window.onresize = () => {
      this.getWindowHeight();
    };
  }

  getWindowHeight = () => {

    const viewHeight = document.body.clientHeight - 122;
    console.log('viewHeight',viewHeight);
    this.setState({
      height: viewHeight
    });
  };

  render() {
    const {height} = this.state;
    const config = {
      [Widget.Navmenu]: {
        width:250,
        height: height || 500,
      },
    };
    const {routerType,fixed} = this.state;
    return (
      <Container fixed={fixed} height={height}>
        {
          <Theme config={config}>
            <Navmenu
              inlineType={'ellipse'}
              mode={'inline'}
              data={getMenuItems(Router[routerType])}
              value={this.state.current}
              inlineExpandAll={true}
              onSelect={this.onSelect}
            />
          </Theme>
        }
      </Container>
    );
  }
  onSelect = res => {
    const { onSelect } = this.props;
    onSelect && onSelect(res);
    const urls = res.value.toLocaleLowerCase();
    go({ url: urls });
  };

  addWindowListener = () => {
    const scrollTop = getScrollTop();
    let fix = false;
    if(scrollTop >= 80){
      fix = true;
    }
    this.setState({
      fixed:fix,
    });
  };

}
