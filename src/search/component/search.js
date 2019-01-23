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

const Container = styled.div`
  z-index: 9999999999999999;
  width:300px;
`;

const Type = styled.div`
  font-size:16px;
  color:#333333;
  line-height:1.0;
  margin:24px 0 18px;
  padding:0 16px;
`;
const { themeColor } = colorsFunc();
const TypeLine = styled.div`
  width:6px;
  height:16px;
  background:${themeColor};
  margin-right:8px;
  display:inline-block;
  border-radius:6px;
  vertical-align: top;
`;

const Title = styled.div`
  font-size:14px;
  color:#999999;
  line-height:1.5;
  text-align:right;
  padding:0 16px 0 0;
`;
const Li = styled.div`
  display:flex;
  width:500px;
  padding:0 16px;
  line-height:1.5;
  margin:8px 0;
  cursor:pointer;
`;
const LiLeft = styled.div`
  width:156px;  
`;
const LiRight = styled.div`
  width:342px;
  border-left:1px solid #999999;
  padding:0 16px;
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
  input: any;
  constructor(props: Object) {
    super(props);
    this.input = React.createRef();
  }

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
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
        width:150
      },
      [Widget.Trigger]: {
        width:500,
        zIndex: 9999999,
      },

    };
    const {searchInfo} = this.state;
    const poup = this.getPopup();
    return (
        <Theme config={InputStyle}>
          <Trigger
            offsetX={120}
            offsetY={1}
            action={['focus']}
            popup={poup}
          >
            <Input
              ref={this.input}
              prefix={<SearchIcon />}
              onChange={this.handleInputChange}
              placeholder="在lugia中搜索"
              value={searchInfo}   />
          </Trigger>

        </Theme>

    );
  }

  getPopEement =(data:Object) => {
    const child = [] ;
    for(const i in data){
      child.push(
        <React.Fragment>
          <Type >
            <TypeLine/>
            {i}
          </Type>
        {
          data[i].map((item, index) => (
            <React.Fragment>
              {index <= 10 && <Li>
              <LiLeft onClick={e => this.linkToUrl(item.url.split('#')[0])}> <Title>{item.owner}</Title> </LiLeft>
              <LiRight onClick={e => this.linkToUrl(item.url)}>{item.content}</LiRight>
            </Li>}
            </React.Fragment>
        ))
        }
        </React.Fragment>
      );

    }
    return (
      <React.Fragment>
        {child.map(item => (
          <React.Fragment>
            {item}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };
  getPopup = () => {
    const {result} = this.state;
      return (
        <Container>
          {result && this.getPopEement(result)}
        </Container>
      );

  };
  handleInputChange = (event:Object) => {
    let newValue='';
    if(!event){
      newValue = null;
    }else{
      newValue = event.newValue;
    }
    const { handleInputChange } = this.props;
    handleInputChange && handleInputChange(newValue);
    this.fetchRequest(newValue);
  };

  fetchRequest= (newValue:string) => {
    const {fetchRequest } = this.props;
    fetchRequest && fetchRequest(newValue);
  };
  linkToUrl = (res:string) => {
    this.handleInputChange(null);
    console.log(res);
    go({ url: res });
  };
  doSearch = () => {

  };

}
