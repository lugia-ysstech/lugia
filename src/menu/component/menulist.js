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
  padding:42px 0 0;
`;

type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

export default class MenuList extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathType = path.match(/[^/]+/g)[0]==='design'?'designConfig':'menuConfig';
    const defCurrent = defProps.current || path;
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

  render() {
    const config = {
      [Widget.Navmenu]: {
        width:280,
        height: '100%',
      },
    };
    const {routerType} = this.state;
    // console.log('Router[routerType]',getMenuItems(Router[routerType]));
    return (
      <Container >
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


}
