import React from "react";
import styled from "styled-components";
import { Grid, Icon,BackTop ,Navmenu} from "@lugia/lugia-web";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";
import HeaderNav from "../nav";
import Widget from "@lugia/lugia-web/dist/consts/index";
import { getBorderRadius, getBorder,getBoxShadow } from '@lugia/theme-utils';
import navMenuData from "./logconfig";

const marked = require('marked');

const { themeColor } = colorsFunc();
const { Row, Col } = Grid;

const OutContainer = styled.div`
  width:100%;
  height:100%;
 
`;

const Block = styled.div`
  height:60px;
`;

const Container = styled.div` 
  padding:45px 0 50px 0;
  width:100%;
`;

const NavmenuContainer = styled.div` 
  padding:45px 0  0;
`;

const Title = styled.div` 
  font-size: 24px;
  color: #0f1333;
  font-weight: 600;
  margin: 0 0 26px;
`;

const TitleH2 = styled.div` 
  font-size: 20px;
  color: #0f1333;
  font-weight: 600;
  margin: 26px 0 16px;
`;

const Text = styled.div` 
  font-size: 14px;
  color: #36384d;
`;


const TitleMin = styled.div` 
  font-size: 18px;
  color: #0f1333;
  font-weight: 600;
  margin: 26px 0 20px;
  position: relative;
   &:before {
    display: inline-block ;
    content: ' ';
    width: 4px;
    height: 18px;
    background: ${themeColor};
    border-radius: 2px;
    margin-right: 8px;
    vertical-align: top;
  }
`;

const TimeLineItem = styled.div` 
  font-size: 14px;
  color: #36384d;
  line-height: 28px;
  margin: ${props => props.margin?props.margin:0};
  position: relative;
   &:before {
    display: inline-block;
    content: ' ';
    width: 4px;
    height: 4px;
    background: ${themeColor};
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
  }
`;


const TimeLineContainer = styled.div` 
  margin: 36px 0 0 0;
  width:100%;
`;


const TimeLineItemContainer = styled.div` 
  width:100%;
  position:relative;
`;

const TimeLineItemLine = styled.div` 
    position:absolute;
    top: 16px;
    left: 4.5px;
    width: 1px;
    height: calc(100% - 8px);
    border-left: 1px solid  #e8e8e8;
    z-index: -1;
`;

const FlexContainer = styled.div` 
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 26px 0 20px 0;
`;


const TimeLineTitle = styled.div` 
  font-size: 18px;
  color: #0f1333;
  font-weight:600;
   &:before {
    display: inline-block;
    content: ' ';
    width: 10px;
    height: 10px;
    background: ${themeColor};
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const TimeLineDate = styled.div` 
  font-size: 12px;
  color: #666666;
  margin: 0 0 0 10px;
  background: #e8e8e8;
  height: 20px;
  padding: 4px 10px;
  border-radius: 10px;
`;

const TimeLineText = styled.div` 
  font-size: 14px;
  margin-right: 4px;
  color: ${props => props.highLight?themeColor:'#36384d'} ;
  line-height: 28px;
  position: relative;
  & > * {
     margin: 0 0 0 20px;
  }
  h2{
     font-size: 14px;
     color: #36384d;
     display: none;
   }
   blockquote{
     border-left: .25em solid #dfe2e5;
     padding: 0 1em;
     margin-bottom: 16px;
     color: #6a737d;
   }
   ul {
      li{
         &:before {
          display: inline-block;
          content: ' ';
          width: 4px;
          height: 4px;
          background: ${themeColor};
          border-radius: 50%;
          margin-right: 8px;
          vertical-align: middle;
        }
      }
   }
`;


const TimeLineLink = styled.a` 
  font-size: 14px;
  margin-right: 4px;
  color: ${props => props.highLight?themeColor:'#36384d'} ;
  line-height: 28px;
  position: relative;
`;



type DefProps = {
  current?: string,
}

type StateProps = {
  current?: string,
  pathType: string
}

const transferData = (time) => {
  let date = new Date(time);
  return date.getFullYear() + '-' +
    (date.getMonth() + 1>9?date.getMonth() + 1:'0'+(date.getMonth() + 1)) + '-' +
    (date.getDate()>9?date.getDate():'0'+date.getDate()) + ' ' ;
};

export default class UpdateLog extends React.Component<any, any> {

  static getDerivedStateFromProps (defProps: DefProps, stateProps: StateProps) {

  }

  constructor(props) {
    super(props);
    const defaultFetchApi  = navMenuData.data[0].children[0].api;
    this.getReleasesData(defaultFetchApi);
    this.state={
      fetchApi:defaultFetchApi,
      current: navMenuData.data[0].children[0].value
    }
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
    this.setState({
      height: viewHeight
    });
  };


  render () {
    const {releases=[],height,name,description} = this.state;
    const config = {
      [Widget.Navmenu]: {
        Tree:{
          TreeWrap:{
            normal:{
              width: 270,
              height,
              boxShadow: getBoxShadow('none')
            }
          },
          TreeItem:{
            Text:{
              hover:{
                color: themeColor,
              }
            },
            SelectedText:{
              normal:{
                background:{
                  color: themeColor
                },
                color: '#fff',
                borderRadius: getBorderRadius(35)
              }
            }
          }
        }
      },
    };
    return (
      <OutContainer>
          <Row>
            <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
              <Block/>
            </Col>
            <Col span={24}  xl={{ span: 22 }}  xxl={{ span: 20 }}>
              <HeaderNav />
              <Row>
                <Col span={6}  xl={{ span: 4 }}  xxl={{ span: 5 }}>
                  <NavmenuContainer>
                    <Navmenu
                      autoHeight={false}
                      theme={config}
                      inlineType={'ellipse'}
                      mode={'inline'}
                      data={navMenuData.data}
                      value={this.state.current}
                      inlineExpandAll={true}
                      onSelect={this.onSelect}
                      step={60}
                    />
                  </NavmenuContainer>

                </Col>
                <Col span={18} xl={{ span: 20 }}  xxl={{ span: 19 }}>
                  <Container>
                    <Title>{name}</Title>
                    <Text> {description} </Text>
                    <TitleH2>更新日志</TitleH2>
                    <Text>Lugia 严格遵守 Semantic Versioning 2.0.0 语义化版本规范。 </Text>
                    <TitleMin>发布周期</TitleMin>
                    <TimeLineItem>修订版本号: 每周末会进行日常 bugfix 更新。(如有紧急的bugfix，则任何时候都可发布)</TimeLineItem>
                    <TimeLineItem>次版本号: 每月发布一个带有新特性的向下兼容版本。</TimeLineItem>
                    <TimeLineItem>主版本号: 含有破坏性更新和新特性，不在发布周期内</TimeLineItem>
                    <TimeLineContainer>
                      {releases.map((item) => {
                        return (
                          <TimeLineItemContainer>
                            <TimeLineItemLine/>
                            <FlexContainer>
                              <TimeLineTitle>{item.tag_name}</TimeLineTitle>
                              <TimeLineDate>{transferData(item.published_at)}</TimeLineDate>
                            </FlexContainer>
                            <TimeLineText className={'TimeLineText'}  dangerouslySetInnerHTML = {{__html:marked(item.body)}}>
                            </TimeLineText >

                          </TimeLineItemContainer>
                        );
                      })}
                    </TimeLineContainer>
                    <BackTop/>
                  </Container>
                  <BackTop/>
                </Col>
              </Row>
            </Col>
            <Col span={0}  xl={{ span: 1 }}  xxl={{ span: 2 }}>
              <Block/>
            </Col>
          </Row>
      </OutContainer>

    );
  }
  onSelect = (target) => {
    const {value} = target;
    const fetchApi = navMenuData.data[0].children.filter(item  => {
      return item.value === value;
    })[0].api;
    this.setState({
      fetchApi,
      current:value
    });
    this.getReleasesData(fetchApi);
  };

  async getReleasesData(fetchApi){
    const result = await fetch(fetchApi+'/releases',
      {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }).then(response => (response.json())).then(data => {
      return data;
    });
    const projectInfo = await fetch(fetchApi,
      {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }).then(response => (response.json())).then(data => {
      return data;
    });
    const {name,description}  = projectInfo;
    this.setState({
      releases:result,
      name,
      description
    });
  }
}
