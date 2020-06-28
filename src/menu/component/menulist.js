/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import { Navmenu } from '@lugia/lugia-web';
import '../../css/menu.css';
import Router from '../../router';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import { getBorderRadius, getBoxShadow } from '@lugia/theme-utils';

import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';

const { themeColor } = colorsFunc();

const getMenuItems = (data: Object) => {
  const arr = [];
  for (const item in data) {
    const { text, value } = data[item];
    const obj = {
      value,
      text: text || value
    };

    const { icon, describe } = data[item];
    if (icon) {
      obj.icon = icon;
    }
    if (describe) {
      obj.describe = describe;
    }

    const children = data[item].children;
    let childArr = [];
    if (children) {
      childArr = getMenuItems(children);
    }
    if (childArr.length) {
      obj.children = childArr;
    }

    const { isHidden } = data[item];
    if (!isHidden) {
      arr.push(obj);
    }
  }
  return arr;
};

const Container = styled.div`
  padding: ${props =>
  props.fixed ? '0' : props.padding ? props.padding : '42px 0 10px'};
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  top: 0;
  width: ${props => `${props.width || 260}px`};
  ${props => (props.mobile ? '' : 'overflow-y: scroll;overflow-x: hidden;')}
  height: ${props => props.height + 'px'};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const MenuBox = styled.div`
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

type DefProps = {
  current?: Array<string>,
  onSelect?: Function
};

type StateProps = {
  currentState: Array<string>
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
  constructor(props) {
    super(props);
    this.canFixed = true;
    this.canCancelFixed = false;
    const path = window.location.hash;
    const pathFilter = path.match(/[^#]+/g)[0].match(/[^/]+/g);
    const pathType = pathFilter[0] === "design" ? "designConfig" : "menuConfig";
    const defaultUrl = Router[pathType][0].children
      ? Router[pathType][0].children[0].value
      : Router[pathType][0].value;
    this.defCurrent =
      pathFilter.length > 1 ? "/" + pathFilter.join("/") : defaultUrl;
    this.routerType = pathType;
    const {routerType = this.routerType} = this.props;
    this.defaultData = getMenuItems(Router[routerType]);
    this.state = {};
  }

  componentDidMount() {
    this.getWindowHeight();
    window.addEventListener('scroll', this.addWindowListener);
    window.onresize = () => {
      this.getWindowHeight();
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const {routerType: nextRouterType} = nextProps;
    const {routerType} = this.props;
    if(routerType !== nextRouterType){
      this.defaultData = getMenuItems(Router[nextRouterType]);
    }

    return true;
  }

  getWindowHeight = () => {
    const viewHeight = document.body.clientHeight - 60;
    const {height} = this.state;
    if(height === viewHeight){
      return;
    }
    this.setState({
      height: viewHeight
    });
  };

  render() {
    const {
      width = 270,
      padding = {},
      isMobile = false,
      data,
      current = this.defCurrent,
    } = this.props;
    const { height } = this.state;

    const config = {
      [Widget.NavMenu]: {
        Tree: {
          Container: {
            normal: {
              width,
              height,
              boxShadow: getBoxShadow('none')
            }
          },
          TreeItem: {
            Text: {
              normal: {
                font: {
                  size: 14
                }
              },
              hover: {
                color: themeColor,
                font: {
                  size: 14
                }
              }
            },
            SelectedText: {
              normal: {
                background: {
                  color: themeColor
                },
                font: {
                  size: 15
                },
                color: '#fff',
                borderRadius: getBorderRadius(35)
              }
            }
          }
        }
      }
    };
    const { fixed } = this.state;
    return (
      <Container width={width} fixed={fixed} height={height} padding={padding}>
        {isMobile ? (
          <MenuBox>
            <Navmenu
              autoHeight={isMobile}
              theme={config}
              inlineType={'ellipse'}
              mode={'inline'}
              data={data || this.defaultData}
              value={current}
              inlineExpandAll={true}
              onSelect={this.onSelect}
              step={60}
            />
          </MenuBox>
        ) : (
          <Navmenu
            autoHeight={true}
            theme={config}
            inlineType={'ellipse'}
            mode={'inline'}
            data={this.defaultData}
            value={this.state.current}
            inlineExpandAll={true}
            onSelect={this.onSelect}
            step={60}
          />
        )}
      </Container>
    );
  }

  onSelect = res => {
    const { onSelect, ignoreGo } = this.props;
    onSelect && onSelect(res);
    if (ignoreGo) {
      return;
    }
    const urls = res.value.toLocaleLowerCase();
    go({ url: urls });
  };

  setFixed = fixed => {
    const {fixed: stateFixed} = this.state;
    if(stateFixed === fixed){
      return;
    }
    this.setState({fixed});
  };

  addWindowListener = () => {
    const scrollTop = getScrollTop();

    if (scrollTop >= 80) {
      if (this.canFixed) {
        this.canFixed = false;
        this.canCancelFixed = true;
        this.setFixed(true);
      }
    } else {
      if (this.canCancelFixed) {
        this.canFixed = true;
        this.canCancelFixed = false;
        this.setFixed(false);
      }
    }
  };
}
