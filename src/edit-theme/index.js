import * as React from 'react';
import styled from 'styled-components';
import { Title } from '../css/edittable';
import {Icon, Navmenu, Theme} from '@lugia/lugia-web';
import Widget from "@lugia/lugia-web/dist/consts/index";
import { getBorderRadius, getBorder, getBoxShadow } from "@lugia/theme-utils";
import Highlight from "react-highlight";

const Wrap = styled.div`
  box-sizing: border-box;
  box-shadow:  ${props => (props.visible ? '0 2px 6px 0 rgba(0,0,0,0.20)' : 'none')};
  margin-bottom: ${props => (props.visible ? '2px' : '0')};
`;
const ThemeTitle = styled.div`
  font-size: 14px;
  color: #36384D;
  padding: 17px 0;
  border-bottom: 1px solid #E8E8E8;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: ${props => (props.mBottom)};
`;
const StateTitle = styled.div`
  padding: 12px 7px 12px 17px;
  color: #393A4F;
  font-size: 14px;
  background: ${props => (props.visible ? '#F8F8F8' : '#fff')};
  cursor: pointer;
`;
const CodeBox = styled.div`
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  text-align: left;
  & > pre > code {
    line-height: 1.2;
    background: #fff;
  }
  padding: 10px 0 10px 17px;
`;
const VisibleCode = styled.div`
  font-size: 14px;
  height: 36px;
  background: #f8f8f8;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  color: #a1a3b3;
  transition: all 0.3s linear;
  box-sizing: border-box;
  // &:hover {
  //   color: #4d63ff;
  //   background: #f2f5ff;
  // }
`;
const Icons = styled(Icon)`
  font-size: 14px;
  vertical-align: middle !important;
  margin-right: 10px;
  float: ${props => (props.pullLeft ? props.pullLeft : 'none')}
`;

const Text  = styled.span`
  color: #515EA9;
  margin-right: 10px;
`;
const BoxWrap = styled.div`
  background: #fff;
  box-sizing: border-box;
`;
type PropsType = {
  dataSource: Object,
  themeConfigData?: Array,
  menuData?: Array
};
type StateType = {
  themeConfigData?: Array,
  menuData?: Array
};
const getConfigData = (obj: Object) => {
  const keys = Object.keys(obj);
  let newObj = {
    configStyles: [],
    visible: false
  }
  keys.forEach(item => {
    newObj['configStyles'].push({
      value: {
        [item]: obj[item]
      },
      name: item,
      show: Array.isArray(obj[item]) ? (obj[item].length > 0 ? true : false) : false,
      visible: false
    });
  })
  newObj = Object.assign(newObj, obj);
  return newObj;
}
const getMenuData = (themeValue: Object, title: String, name: String) => {
  let menuData = [];
  let flag = false;
  let obj = {
      value: name,
      text: title };
  let themeConfig = [];
  if ('theme' in themeValue) {
    const configData = themeValue['theme'];
    const keys = Object.keys(configData);
    let themeTitle = '';
    obj['children'] = [];
    keys.forEach(item => {
      if ('theme' in configData[item]) {
        flag = true;
      }
    })
    if (flag) {
      keys.forEach(item => {
        themeTitle = configData[item].name ? configData[item].name : item;
        obj['children'] = obj['children'].concat(getMenuData(configData[item], themeTitle, `${name}-${item}`));
      })
    } else {
      const themeKeys = Object.keys(configData)
      themeKeys.forEach(item => {
        themeConfig.push(getConfigData(configData[item], name))
      })
       obj['themeConfig'] = themeConfig;
    }
  } else {
    themeConfig.push(getConfigData(themeValue, name))
    obj['themeConfig'] = themeConfig;
  }
  menuData.push(obj);
  return menuData;
}
const toText = (str) => {
  if (!str) {
    return str;
  }
  return str.replace(/^\{/g, '').replace(/\}$/g, '').replace(/\:\[/g, ':[\n\n\t').replace(/\],/g, '],\n\n\t').replace(/\]]/g, ']\n\n]');
}
const getCurrentThemeData = (data: Object) => {
   let themeData = null;
   if (!data) {
     return;
   }
   if ('themeConfig' in data) {
     themeData = data['themeConfig'];
   } else {
     themeData = getCurrentThemeData(data['children'][0]);
   }
   // themeData[0].visible = true;
   return themeData;
}
class Element extends React.Component<> {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps (defProps: PropsType, stateProps: StateType) {
    const {dataSource: {theme: value, designInfo: designValue, title: title, widgetName: name}} = defProps;
    let menuData = [];
    if (value) {
      menuData = getMenuData({'theme': value}, title, name);
    }
    if (designValue) {
      for (const [key, value] of Object.entries(designValue)) {
        menuData = menuData.concat(getMenuData(value, value.title, key));
      }
    }
    const defCurrent = getCurrentThemeData(menuData[0]);
    if (!stateProps) {
      return {
        dataSource: defProps.dataSource,
        menuData: menuData,
        themeConfigData: defCurrent
      };
    }
    const { dataSource } = stateProps;
    return {
      dataSource: 'dataSource' in defProps ? defProps.dataSource : dataSource,
      menuData: 'menuData' in stateProps ? stateProps.menuData : defProps.menuData
    };
  }
  render () {
    const MenuStyle = {
        [Widget.Navmenu]: {
          Tabs: {
            TabHeader: {
              DefaultTabPan: {
                normal: {
                  color: '#36384D',
                  font: {size: 14, family: 'PingFangSC-Medium'},
                  background: 'none'
                }
              }
            }
          },
          Menu: {
            Container: {
              normal: {
                boxShadow: getBoxShadow('0 0 6px 0 rgba(0,0,0,0.30)'),
                borderRadius: getBorderRadius(4)
              }
            },
            MenuItem: {
              MenuItemWrap: {
                normal: {
                  color: '#36384D'
                },
                hover: {
                  font: {
                    weight: 500
                  }
                }
              },
              SelectedMenuItemWrap: {
                normal: {
                  font: {
                    size: 14,
                    weight: 500
                  }
                }
              }
            },
            SubMenu: {
              Container: {
                normal: {
                  boxShadow: getBoxShadow('0 0 6px 0 rgba(0,0,0,0.30)'),
                  borderRadius: getBorderRadius(4)
                }
              },
              MenuItem: {
                MenuItemWrap: {
                  normal: {
                    color: '#36384D'
                  },
                  hover: {
                    font: {size: 14, weight: 500},
                  }
                },
                SelectedMenuItemWrap: {
                  normal: {
                    font: {size: 14, weight: 500}
                  }
                }
              }
            }
          }
        }
    }
    const {menuData, themeConfigData} = this.state;
    return (
      <React.Fragment>
        <Title>可配置Theme</Title>
        <Theme>
          {menuData.length > 0 ?
            <Navmenu theme={MenuStyle} data={menuData} mode={"horizontal"} onChange={this.onChange}></Navmenu>
            : '暂无可配置项！'
          }
          {this.getTheme(themeConfigData)}
        </Theme>
      </React.Fragment>
    )
  }
  getTheme = (data: Array) => {
    if (!data) {
      return;
    }
     return (
       <React.Fragment>
         {data.map((item) => {
           return (
             <Wrap>
                <ThemeTitle onClick={() => this.handleClick(item, event)} mBottom={item.visible ? '16px' : '0'}>
                  <Icons
                    iconClass={item.visible ? 'lugia-icon-direction_up' : 'lugia-icon-direction_down'}
                  />
                  {item.name}
                </ThemeTitle>
                {item.visible ? this.getConfigStyle(item.configStyles) : ''}
             </Wrap>
           )
         })}
       </React.Fragment>
     )
  }
  getConfigStyle = (data: Array) => {
    if (!data) {
      return;
    }
    return (
      <React.Fragment>
        {data.map((item, index)=> {
          return (
             <Wrap visible={item.visible}>
              <StateTitle visible={index % 2 === 0 ? true : false}>
                 <Text>"{item.name}"</Text>
                {item.show ?
                  <Icons onClick={() => this.handleClick(item)} iconClass={item.visible ? 'lugia-icon-direction_up' : 'lugia-icon-direction_down'} pullLeft={'right'}></Icons>
                  : <Icons iconClass={'lugia-icon-reminder_minus'} pullLeft={'right'}></Icons>}
              </StateTitle>
               {item.visible ? <BoxWrap>
                 <CodeBox>
                   {/*<Highlight className="javascript-jsx">{toText(JSON.stringify(item.value))}</Highlight>*/}
                   <pre>{toText(JSON.stringify(item.value))}</pre>
                 </CodeBox>
                 <VisibleCode>
                    <Icons iconClass='lugia-icon-finacial_hide_code'/>
                 </VisibleCode>
               </BoxWrap> : null}
            </Wrap>
          )
        })}
      </React.Fragment>
    )
  }
  handleClick = (el: Object) => {
    const {visible} = el;
    el.visible = !visible;
    this.setState({
      el: {
        visible: !visible
      }
    })
  }
  onChange = (value) => {
    this.setState({
      themeConfigData: value.newItem.themeConfig
    })
  }
}

export default Element;
