/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import {Theme ,Icon,Input,Trigger} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
require('isomorphic-fetch');

const defaultData ={
  原则:[
    {url: 'design/color', content: '字体', power: 1, type: '原则'},
    {
      url: 'design/font',
      content: {text: '字体是界面设计中最基本的构成元素之一。Lugia字体方案，是根据人眼阅读习惯，清晰页面的视觉层次，我们建议所选字体要满足以下三个方面：'},
      power: 2,
      type: '原则'
    },
    {url: 'design/font', content: {text: '·合理的使用不同的字重、字号和颜色；'}, power: 2, type: '原则'}, {
      url: 'design/font',
      content: {text: '·尽量使用统一字体；'},
      power: 2,
      type: '原则'
    },
    {
      url: 'design/font',
      content: {text: '·遵循 WCAG 2.0 标准，字体在使用时与背景颜色的对比值满足无障碍阅读的最低标准。'},
      power: 2,
      type: '原则'
    },
]};

const Container = styled.div`
  width:300px;
`;

const Type = styled.div`
  font-size:16px;
  color:#333333;
  line-height:1.0;
  margin:24px 0 18px;
`;
const { themeColor } = colorsFunc();
const TypeLine = styled.div`
  width:6px;
  height:16px;
  background:${themeColor};
  margin-right:8px;
`;

const Title = styled.div`
  font-size:19px;
  color:#999999;
  line-height:1.5;
  text-align:right;
  width:
`;
const Li = styled.div`
  display:flex;
  
`;

type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

class SearchIcon extends React.Component<any> {
  static displayName = Widget.SearchIcon;

  render() {
    return <Icon iconClass="lugia-icon-financial_search"  />;
  }
}



export default class Navcomponent extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    console.log(defProps,stateProps);
    const {searchInfo,result} = defProps;
    if (!stateProps) {
      return {
        searchInfo,
        result
      };
    }
    return {
      searchInfo: 'searchInfo' in defProps?searchInfo:stateProps.searchInfo,
      result: 'searchInfo' in defProps?result:stateProps.result,
    };
  }

  render() {
    const InputStyle = {
      [Widget.Input]: {
        borderSize:{top:0,right:0,bottom:1,left:0},
        borderColor:'#ccc',
        margin: {top:0,right:0,bottom:0,left:38},
      },

    };
    const {searchInfo} = this.state;
    const poup = this.getPopup();
    return (
        <Theme config={InputStyle}>
          <Trigger
            offsetX={20}
            offsetY={1}
            action={['focus']}
            popup={poup}
          >
            <Input prefix={<SearchIcon />} onChange={this.handleInputChange} placeholder="在lugia中搜索" value={searchInfo}   />
          </Trigger>

        </Theme>

    );
  }

  getPopEement =(data:Object) => {
    let child ;
    for(const i in data){
      data[i].forEach((item,index) => {
        console.log(item);
      })
      ;
    }
    return (
      <React.Fragment>
        {child}
      </React.Fragment>
    );
  };
  getPopup = () => {
    const {data} = this.state;
      return (
        <Container>
          {data && this.getPopEement(data)}
        </Container>
      );

  };
  handleInputChange = (event:Object) => {
    const {newValue} = event;
    const { handleInputChange } = this.props;
    handleInputChange && handleInputChange(newValue);
    this.fetchRequest(newValue);
  };

  fetchRequest= (newValue:string) => {
    const {fetchRequest } = this.props;
    fetchRequest && fetchRequest(newValue);
  };
  linkToUrl = (res:string) => {
    go({ url: res });
  };


}
