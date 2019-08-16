/**
 *
 * create by LYQ
 *
 * @flow
 */
import React  from "react";
import styled from "styled-components";
import { Grid, Icon } from "@lugia/lugia-web";
import Footer from '../../footer';

import HeaderNav from "../nav";

import banner from "../../mega/banner.png";
import megaImg from "../../mega/mega.png";
import jobPipe from "../../mega/jobPipe.png";
import program from "../../mega/program.png";
import foot from "../../mega/foot.png";
import page from "../../mega/page.png";
import wuliao from "../../mega/wuliao.png";
import developTool from "../../mega/developTool.png";
import model from "../../mega/model.png";
import error from "../../mega/error.png";

const Container = styled.div`
  height: 286px;
  width: ${props =>
    props.width
      ? typeof props.width === "string"
        ? props.width
        : `${props.width}px`
      : "48%"};
  box-shadow: 0 0 10px 0 rgba(77,104,255,0.21);
  border-radius: 10px;
  text-align: center;
  padding: 0 11px;
  margin: 10px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 59px 0 0;
`;

const Mask = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left:0;
  top:0;
  background: rgba(0,0,102,0.30);
  
`;

const MaskInner = styled.div`
  width: 231px;
  height: 317px;
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  border-radius: 10px;
  padding-top: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const MaskText = styled.div`
  font-size: 18px;
  color: ${props => props.color?props.color:'#50575D'} ;
  margin: ${props => props.margin?props.margin:'0'} ;
  text-align: center;
`;

const Square = styled.div`
  width:45px;
  height: 8px;
  margin-left: 50%;
  transform: translateX(-50%);
  background:linear-gradient(0deg, #4D68FF 0%, #8093FF 100%);
  border-radius:6px;
  margin-top: 4px;
`;

const FlexBox = styled.div`
  width: 100%;
  margin: ${props => (props.margin ? `${props.margin}` : "0")};
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BannerImgContainer = styled.div`
  width: 100%;
  overflow:hidden;
`;

const BannerImg = styled.img`
  width: 152%;
  transform: translateX(-22%);
`;

const Main = styled.div`
  padding: 34px 0 0 0;
`;

const PdfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 22px 20px 0;
`;

const DownLoadBox = styled.div`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MidBlock = styled.div`
  text-align: center;
  padding:  0 20px;
`;

const Tittle1 = styled.p`
  font-size: 18px;
  line-height: 37px;
  color: #000066;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  font-weight: bold;
`;

const Tittle2 = styled.p`
  font-size: 14px;
  line-height: 28px;
  color: #747e90;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  margin: ${props => props.margin?props.margin: '4px 0 0'} ;
  text-align: center;
  
`;
const Tittle3 = styled.p`
  font-size: 26px;
  line-height: 28px;
  color: #000066;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  margin-top: 16px;
  font-weight: bold;
`;

const Tittle5 = styled.p`
  font-size: 32px;
  line-height: 28px;
  color: #000066;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  margin-top: 16px;
  font-weight: bold;
  text-align: center;
`;
const Tittle4 = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  color: #000066;
  font-weight: bold;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  position: relative;
  margin: 7px 0;
  text-align: center;
`;


const Text = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #747e90;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  text-align: ${props => props.center?props.center:"justify"};
  
`;

const Img = styled.img`
  margin: 15px 0 12px;
  width: ${props => (props.width ? `${props.width}px` : "100%")};
`;



const Mac = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center; 
  width: ${props => (props.width ? `${props.width}px`: '162px')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px`: '32px')}; 
  height: ${props => (props.height ? `${ props.height } px`: '32px')};
  background: linear-gradient(0deg, #4D68FF 0%, #8093FF 100%);;
  border-radius: 32px;
  text-align: center;
  transition: 0.2s;
  color: #fff;
  &:active {
    background: linear-gradient(0deg, #3D53CC 0%, #8093FF 100%);
  }
`;

const Window = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center; 
  width: ${props => (props.width? `${props.width}px`: '162px')};
  line-height: ${props => (props.lineHeight? `${props.lineHeight}px`: '32px')};
  height: ${props => (props.height? `${props.height}px`: '32px')};
  border-radius: 32px;
  margin-left: 6px;
  transition: 0.2s;
  text-align: center;
  color: #4D63FF;
  border: 1px solid #4D63FF;
  &:active {
    background-color: rgba(77,104,255,0.20);
  }
`;

const DownLoad = styled.a`
  display: inline-block;
  height: 32px;
  width: 32px;
  margin-left: 8px;
  box-shadow: 0px 1px 7px 0px rgba(77, 104, 255, 0.3);
  border-radius: 100%;
`;


const LogContainer = styled.a`
  display: block;
  color: #4D63FF;
  font-size: 13px;
  margin: 12px 0 24px;
  text-decoration: underline !important;
  &:active {
    color: #3D53CC;
  }
`;

const Span = styled.span`
  font-size: ${ props => (props.font?`${props.font}px`: '14px')};
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  text-align: center;
  vertical-align: middle;
`;
const IconSpan = styled.span`
  font-size: 14px;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  text-align: center;
  vertical-align: middle;
`;

const Foot = styled.div`
  background:url("${foot}") no-repeat center bottom;
  position: absolute;
  background-size: 225%;
  width: 100%;
  height:100px;
  left: 0;
  bottom: 0;
  z-index: 2;
`;



export default class Mega extends React.Component {
  mask:any;
  constructor(props){
    super(props);
    this.state = {};
    this.mask = React.createRef();
  }

  render() {
    const {isShowMask} = this.state;
    return (
      <React.Fragment>
        <HeaderNav/>
          <BannerImgContainer>
            <BannerImg src={banner}/>
          </BannerImgContainer>
          <Main>
            <Tittle5>欢迎使用 Lugia Mega</Tittle5>
            <Tittle2 margin={'10px 0 0'}>请选择您要安装的操作系统</Tittle2>
            <DownLoadBox>
              <Mac onClick={() => this.doAlertMask(true)}>
                <Icon
                  iconClass="lugia-icon-logo_apple"
                  theme={{
                    icon: {
                      Icon: {
                        normal: {
                          font: {
                            size: 18
                          },
                          margin: 6,
                          // color: "#4d63ff"
                        }
                      }
                    }
                  }}
                  viewClass={"icon"}
                />
                <Span>mac版本</Span>
              </Mac>
              <Window  onClick={() => this.doAlertMask(true)}>
                <Icon
                  iconClass="lugia-icon-logo_windows"
                  theme={{
                    icon: {
                      Icon: {
                        normal: {
                          font: {
                            size: 18
                          },
                          margin: 6,
                          color: "#4d63ff"
                        }
                      }
                    }
                  }}
                  viewClass={"icon"}
                />
                <Span>windows版本</Span>
              </Window>

            </DownLoadBox>
            <PdfContainer>
              <DownLoad href="https://github.com/lugia-ysstech/lugia/raw/master/doc/lugia-v1.1.0-%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C%20%E4%B8%AD%E6%96%87%EF%BC%88%E7%AE%80%EF%BC%89.pdf">
                <IconSpan>
                  <Icon
                    iconClass="lugia-icon-financial_pdf"
                    theme={{
                      icon: {
                        Icon: {
                          normal: {
                            font: {
                              size: 18
                            },
                            margin: 6,
                            color: "#4d63ff"
                          }
                        }
                      }
                    }}
                    viewClass={"icon"}
                  />
                </IconSpan>
              </DownLoad>
            </PdfContainer>
          </Main>
          <MidBlock>
            <Tittle3>Lugia Mega</Tittle3>
            <Tittle2>标准、高效、开箱即用的前端可视化开发工具</Tittle2>
            <LogContainer href="https://github.com/lugia-ysstech/lugia/releases" target={'_blank'}>
              更新日志
            </LogContainer>
            <Img src={megaImg} alt="" width={310} />
            <Tittle4>工作流</Tittle4>
            <Text>
              重塑项目开发流程，不同职位的产出成果可以直接迭代复用，从而满足云原生大前端的快速迭代开发需求。
            </Text>
            <Img src={jobPipe} alt=""  />

            <Tittle4>愿景</Tittle4>
            <Text center={'center'}>
              降低开发成本，提高前端开发质量，提升用户体验。
            </Text>
            <Wrapper>
              <Tittle3>功能点</Tittle3>
              <Tittle2>Functional point</Tittle2>
              <Square/>
            </Wrapper>
            <FlexBox margin={'20px 0 0'}>
              <Container>
                <Img src={program} alt="" width={100} />
                <Tittle1>项目管理</Tittle1>
                <Text>对符合 lugia-mega 规范的前端项目进行管理</Text>
              </Container>
              <Container >
                <Img src={page} alt="" width={100} />
                <Tittle1>页面设计器</Tittle1>
                <Text>
                  通过对所需物料的拖拽、组合等方式来完成整个页面设计稿
                </Text>
              </Container>

              <Container  >
                <Img src={wuliao} alt="" width={100} />
                <Tittle1>物料体系</Tittle1>
                <Text>物料体系是 lugia-mega 重要的生产力要素</Text>
              </Container>

              <Container >
                <Img src={developTool} alt="" width={100} />
                <Tittle1>开发工具链</Tittle1>
                <Text>
                  提供开发现代单页应用需要的所有环境，是 lugia-mega
                  组成部分的链接器
                </Text>
              </Container>

              <Container  >
                <Img src={model} alt="" width={100} />
                <Tittle1>模型规范</Tittle1>
                <Text>
                  模型规范分离了用户视图和业务逻辑，lugia-mega
                  可以复用已有项目的业务模型
                </Text>
              </Container>
            </FlexBox>
          </MidBlock>
        <Footer height={150}/>
        <Foot />

        {isShowMask?<Mask id={'mask'} ref={this.mask}>
          <MaskInner>
            <Img src={error} width={175}/>
            <MaskText margin={'17px 0 6px'}>为了节省您的流量</MaskText>
            <MaskText margin={'0 0 20px'} color={'#4d63ff'}>请前往PC端下载</MaskText>
            <Mac height={36} onClick={() => this.doAlertMask(false)}>
              朕知道了
            </Mac>
          </MaskInner>
        </Mask>:''}
      </React.Fragment>
    );
  }

  sidebarTouchMove = (e) => {
    e.preventDefault();
  };

  doAlertMask = (type:boolean) => {
    this.setState({
      isShowMask: type
    },() => {
      if(type){
        this.mask.current.addEventListener("touchmove", (e) => {
          this.sidebarTouchMove(e)
        }, {
          passive: false
        })
      }

    })
  }

}
