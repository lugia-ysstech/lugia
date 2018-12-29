/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Button, Menu,Navmenu ,Theme} from "@lugia/lugia-web";
import '../css/menu.css';
import routerConfig from "../router";
import Widget from '@lugia/lugia-web/dist/consts/index';

const getMenuItems = (data:Object) => {
  const arr =[];
  for(let item in data){

    const {text,value} = data[item];
    const obj= {
      value: value,
      text: text || value,
    };

    const {icon,describe} = data[item];
    if(icon){
      obj.icon =icon
    }
    if(describe){
      obj.describe =describe
    }

    const children = data[item].children;
    let childArr = [];
    if(children){
      childArr = getMenuItems(children);
    }
    if(childArr.length){
      obj.children = childArr
    }

    arr.push(obj);
  }
  console.log('--------',arr);
  return arr;
};

const newData = [
  {
    value: 'Lugia Design of React',
    text: 'Lugia Design of React',
    icon: 'lugia-icon-financial_add_pic',
  },
  { value: '快速上手', text: '快速上手', icon: 'lugia-icon-financial_columns' },
  { value: '项目实战', text: '项目实战' },
  { value: '在Lugia-mega中使用', text: '在Lugia-mega中使用' },
  {
    value: 'Components',
    text: 'Components',
    children: [
      {
        value: 'General',
        text: 'General',
        describe: true,
        children: [
          { value: 'Button 按钮', text: 'Button 按钮', icon: 'lugia-icon-financial_add_pic' },
          { value: 'Icon 图标', text: 'Icon 图标', icon: 'lugia-icon-financial_archive' },
        ],
      },

      {
        value: 'Layout',
        text: 'Layout',
        describe: true,
        children: [
          { value: 'Grid 栅格', text: 'Grid 栅格' },
          { value: 'Layout 布局', text: 'Layout 布局' },
        ],
      },

      {
        value: 'Navigation',
        text: 'Navigation',
        describe: true,
        children: [
          { value: 'Affix 固钉', text: 'Affix 固钉' },
          { value: 'Breadcrumb 面包屑', text: 'Breadcrumb 面包屑' },
          { value: 'Dropdown 下拉菜单', text: 'Dropdown 下拉菜单' },
          { value: 'Menu 导航菜单', text: 'Menu 导航菜单' },
          { value: 'Pagination 分页', text: 'Pagination 分页' },
          { value: 'Steps 步骤条', text: 'Steps 步骤条' },
        ],
      },

      {
        value: 'Data Entry',
        text: 'Data Entry',
        describe: true,
        children: [
          { value: 'AutoComplete 自动完成', text: 'AutoComplete 自动完成' },
          { value: 'Cascader 级联选择', text: 'Cascader 级联选择' },
          { value: 'Checkbox 多选框', text: 'Checkbox 多选框' },
          { value: 'DatePicker 日期选择框', text: 'DatePicker 日期选择框' },
          { value: 'Form 表单', text: 'Form 表单' },
          { value: 'Input 输入框', text: 'Input 输入框' },
        ],
      },
    ],
  },
];

export default class Header extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = { value: ['EditTable'] };
  }

  render() {
    const config = {
      [Widget.NavMenu]: {
        // width: 300,
        fontSize:'14px',
      },
    };
    return (
      <div className="menu-container">
        {/*{*/}
          {/*getMenuItems(routerConfig).map((item, index) =>*/}
            {/*<Link key={index} to={'/' + item.value} >{item.value} </Link>*/}
          {/*)*/}
        {/*}*/}
        {
          <Theme config={config}>
            <Navmenu
              inlineType={'ellipse'}
              mode={'inline'}
              data={getMenuItems(routerConfig)}
              value={this.state.value}
              inlineExpandAll={true}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </Theme>
        }
      </div>
    );
  }
  onSelect = (res) => {
    console.log(res);
    go({ url: res.value })
  };
  onChange = (res) => {
    console.log(res);
  };


}
