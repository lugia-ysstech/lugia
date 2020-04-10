import * as React from 'react';
import styled from 'styled-components';
import { Title } from '../css/edittable';
import { Icon, Navmenu } from '@lugia/lugia-web';
import Widget from "@lugia/lugia-web/dist/consts/index";
import { getBorderRadius, getBoxShadow } from "@lugia/theme-utils";
import Highlight from "react-highlight";

const Wrap = styled.div`
  box-sizing: border-box;
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
  background: ${props => (props.bgColor)};
  cursor: pointer;
  box-shadow:  ${props => (props.visible ? '0 2px 6px 0 rgba(0,0,0,0.20)' : 'none')};
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
  &:hover {
    color: #4d63ff;
    background: #f2f5ff;
  }
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
  box-shadow:  ${props => (props.visible ? '0 2px 6px 0 rgba(0,0,0,0.20)' : 'none')};
  margin-bottom: ${props => (props.visible ? '2px' : '0')};
`;
type PropsType = {
  dataSource: Object
};
type StateType = {
  themeConfigData: Array,
  menuData: Array,
};
const getThemeConfigData = (obj: Object) => {
  let newObj = {
    configStyles: [],
    visible: false
  }
  for (const [key, value] of Object.entries(obj)) {
    if (key !== 'name' && key !== 'desc') {
      newObj['configStyles'].push({
        value: {
          [key]: value
        },
        name: key,
        show: Array.isArray(value) ? (value.length > 0 ? true : false) : false,
        visible: false
      });
    }
  }
  newObj = Object.assign(newObj, obj);
  return newObj;
}
const getItemMenuData = (themeValue: Object, title: String, name: String) => {
  let menuData = [];
  let flag = false;
  let obj = {
      value: name,
      text: title
  };
  let themeConfig = [];
  if ('theme' in themeValue) {
    const configData = themeValue['theme'];
    const keys = Object.keys(configData);
    let themeTitle = '';
    obj['children'] = [];
    flag = Object.values(configData).some((item) => 'theme' in item)
    if (flag) {
      keys.forEach(item => {
        themeTitle = configData[item].name ? configData[item].name : item;
        obj['children'] = obj['children'].concat(getItemMenuData(configData[item], themeTitle, `${name}-${item}`));
      })
    } else {
      keys.forEach(item => {
        themeConfig.push(getThemeConfigData(configData[item], name))
      })
       obj['themeConfig'] = themeConfig;
    }
  } else {
    themeConfig.push(getThemeConfigData(themeValue, name))
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
const getCurrentThemeConfig = (data: Object) => {
   let themeData = null;
   if (!data) {
     return;
   }
   if ('themeConfig' in data) {
     themeData = data['themeConfig'];
   } else {
     themeData = getCurrentThemeConfig(data['children'][0]);
   }
   themeData[0].visible = true;
   return themeData;
}
const  getMenuData = (dataSource: Object) => {
   let menuData = [];
   for (const value of Object.values(dataSource)) {
     const {title: title, widgetName: name, designInfo: designValue, theme: themeValue} = value;
     if (themeValue) {
       menuData = menuData.concat(getItemMenuData(value, title, name));
     }
     if (designValue) {
        for (const [key, itemValue] of Object.entries(designValue)) {
          menuData = menuData.concat(getItemMenuData(itemValue, itemValue.title, key));
        }
     }
   }
   return menuData;
}
class EditTheme extends React.Component<> {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps (defProps: PropsType, stateProps: StateType) {
    const { dataSource } = defProps;
    const menuData = getMenuData(dataSource);
    const defThemeConfigData = getCurrentThemeConfig(menuData[0]);
    if (!stateProps) {
      return {
        dataSource: dataSource,
        menuData: menuData,
        themeConfigData: defThemeConfigData
      };
    }
    return {
      dataSource: 'dataSource' in stateProps ? dataSource.dataSource : defProps.dataSource,
      menuData: 'menuData' in stateProps ? stateProps.menuData : [],
      themeConfigData: 'themeConfigData' in stateProps ? stateProps.themeConfigData : []
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
          {themeConfigData ?
            <Wrap>
              <Title>可配置Theme</Title>
              <Navmenu theme={MenuStyle} data={menuData} mode={"horizontal"} onChange={this.onChange}></Navmenu>
            </Wrap> : null}
          {this.getTheme(themeConfigData)}
      </React.Fragment>
    )
  }
  getTheme = (data: Array) => {
    if (!data) {
      return;
    }
     return (
       <React.Fragment>
         {data.map((item, key) => {
           return (
             <Wrap>
                <ThemeTitle onClick={() => this.handleClick(key)} mBottom={item.visible ? '16px' : '0'}>
                  <Icons
                    iconClass={item.visible ? 'lugia-icon-direction_up' : 'lugia-icon-direction_down'}
                  />
                  {item.name}
                </ThemeTitle>
                {item.visible ? this.getStyleConfig(item.configStyles, key) : null}
             </Wrap>
           )
         })}
       </React.Fragment>
     )
  }
  getStyleConfig = (data: Array, key: number) => {
    if (!data) {
      return;
    }
    return (
      <React.Fragment>
        {data.map((item, index)=> {
          return (
             <Wrap>
              <StateTitle visible={item.visible} bgColor={index % 2 === 0 ? '#F8F8F8' : '#fff'} onClick={() => this.handleClick(index, key)}>
                 <Text>"{item.name}"</Text>
                {item.show ?
                  <Icons iconClass={item.visible ? 'lugia-icon-direction_up' : 'lugia-icon-direction_down'} pullLeft={'right'}></Icons>
                  : <Icons iconClass={'lugia-icon-reminder_minus'} pullLeft={'right'}></Icons>}
              </StateTitle>
               {item.visible ? <BoxWrap visible={item.visible}>
                 <CodeBox>
                   <Highlight className="javascript-jsx">{toText(JSON.stringify(item.value))}</Highlight>
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
  handleClick = (index: number, key: number) => {
    const {themeConfigData} = this.state;
    const visible =  key >= 0 ? themeConfigData[key]['configStyles'][index].visible : themeConfigData[index].visible;
    if (key >= 0) {
      themeConfigData[key]['configStyles'][index].visible = !visible;
    } else {
      themeConfigData[index].visible = !visible;
    }
    this.setState({
      themeConfigData
    })
  }
  onChange = (value) => {
    const newThemeConfigData = value.newItem.themeConfig;
    newThemeConfigData.length > 0 && newThemeConfigData.forEach((item, index) => {
      index === 0 ? item.visible = true : item.visible = false;
    })
    this.setState({
      themeConfigData: newThemeConfigData
    })
  }
}
export default EditTheme;
