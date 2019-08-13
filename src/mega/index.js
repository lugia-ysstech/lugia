/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from "react";
import styled from "styled-components";
import { go } from "@lugia/lugiax-router";
import { Grid, Icon } from "@lugia/lugia-web";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";

import Headers from "../nav";

import mac from "../../public/mega/mac.png";
import windows from "../../public/mega/windows.png";
import banner from "./banner.png";
import megaImg from "./mega.png";
import jobPipe from "./jobPipe.png";
import program from "./program.png";
import foot from "./foot.png";
import page from "./page.png";
import wuliao from "./wuliao.png";
import developTool from "./developTool.png";
import model from "./model.png";

const { themeColor } = colorsFunc();
const { Row, Col } = Grid;
const Block = styled.div`
  width: 100%;
  min-height: 20px;
`;

const Container = styled.div`
  width: ${props =>
    props.width
      ? typeof props.width === "string"
        ? props.width
        : `${props.width}px`
      : ""};
  margin: ${props => (props.margin ? `${props.margin}` : "0")};
`;
const ContainerRight = styled.div`
  width: 480px;
  margin: 0 0 0 70px;
  text-align: left;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const FlexBox = styled.div`
  width: 100%;
  margin: ${props => (props.margin ? `${props.margin}` : "0")};
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

const Main = styled.div`
  min-height: 520px;
  padding: 120px 0 0 0;
  background: url(${banner}) no-repeat;
  background-position: bottom right;
  margin: 0 0 80px;
`;

const DownLoadBox = styled.div`
  padding: 34px 0 0;
  display: flex;
  flex-direction: row;
`;

const MidBlock = styled.div`
  text-align: center;
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
  margin-top: 10px;
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
`;
const Tittle4 = styled.div`
  text-align: left;
  font-size: 18px;
  line-height: 18px;
  color: #000066;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  position: relative;
`;

const Img = styled.img`
  margin: 30px 0;
  width: ${props => (props.width ? `${props.width}px` : "")};
`;

const Mac = styled.a`
  display: inline-block;
  height: 32px;
  width: 148px;
  background-color: #000;
  border-radius: 32px;
  text-align: center;
  line-height: 32px;
  transition: 0.2s;
  &:hover {
    background-color: #333;
  }
`;

const MacLogo = styled.div`
  height: 20px;
  width: 20px;
  background: url(${mac}) no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const Window = styled.a`
  display: inline-block;
  width: ${props => (props.width? `${props.width}px`: '148px')};
  line-height: ${props => (props.lineHeight? `${props.lineHeight}px`: '32px')};
  height: ${props => (props.height? `${props.height}px`: '32px')};
  background-color: #4d63ff;
  background-image: linear-gradient(-90deg, #8093FF 0%,  #4D68FF 100%);
  border-radius: 32px;
  margin-left: 6px;
  transition: 0.2s;
  text-align: center;
  &:hover {
    background-image: linear-gradient(-90deg, #8093FF 0%,  #3D53CC 100%);
    background-color: #3D53CC;
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

const WindowLogo = styled.div`
  height: 15px;
  width: 15px;
  background: url(${windows}) no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const Span = styled.span`
  font-size: ${ props => (props.font?`${props.font}px`: '14px')};
  color: #fff;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  text-align: center;
  vertical-align: middle;
`;
const IconSpan = styled.span`
  font-size: 14px;
  color: #fff;
  font-family: Gotham, Helvetica Neue, Helvetica, Arial, " sans-serif";
  text-align: center;
  vertical-align: middle;
`;

const Foot = styled.div`
  height: 252px;
  width: 100%;
  background: url(${foot}) no-repeat;
  background-size: 100% 90%;
  background-position-y: 25px;
`;

export default class Mega extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Row>
            <Col span={5} xl={{ span: 1 }} xxl={{ span: 3 }}>
              <Block> </Block>
            </Col>
            <Col span={14} xl={{ span: 22 }} xxl={{ span: 18 }}>
              <Headers />
              <Main>
                <Tittle5>欢迎使用 Lugia Mega</Tittle5>
                <Tittle2>请选择您要安装的操作系统</Tittle2>
                <DownLoadBox>
                  <Mac href="https://lugia.oss-cn-beijing.aliyuncs.com/download/v1.1.2/LugiaMega-1.1.2.dmg">
                    <MacLogo />
                    <Span>mac版本</Span>
                  </Mac>
                  <Window href="https://lugia.oss-cn-beijing.aliyuncs.com/download/v1.1.2/LugiaMega%20Setup%201.1.2.exe">
                    <WindowLogo />
                    <Span>windows版本</Span>
                  </Window>
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
                </DownLoadBox>
              </Main>
              <MidBlock>
                <Tittle3>Lugia Mega
                  <Window width={73} height={24} lineHeight={22} href="https://github.com/lugia-ysstech/lugia/releases" target='_blank'>
                    <Span font={12}>更新日志</Span>
                  </Window>
                </Tittle3>
                <Tittle2>标准、高效、开箱即用的前端可视化开发工具</Tittle2>
                <FlexBox margin={"50px 0 120px"}>
                  <Container>
                    <img src={megaImg} alt="" />
                  </Container>
                  <ContainerRight>
                    <Tittle4>工作流</Tittle4>
                    <Tittle2>
                      重塑项目开发流程，不同职位的产出成果可以直接迭代复用，从而满足云原生大前端的快速迭代开发需求。
                    </Tittle2>
                    <Img src={jobPipe} alt="" width={486} />

                    <Tittle4>愿景</Tittle4>
                    <Tittle2>
                      降低开发成本，提高前端开发质量，提升用户体验。
                    </Tittle2>
                  </ContainerRight>
                </FlexBox>
                <Tittle3>功能点</Tittle3>
                <Tittle2>Functional point</Tittle2>
                <FlexBox>
                  <Container width={"27%"} margin={"10px 35px"}>
                    <Img src={program} alt="" width={120} />
                    <Tittle1>项目管理</Tittle1>
                    <Tittle2>对符合 lugia-mega 规范的前端项目进行管理</Tittle2>
                  </Container>

                  <Container width={"27%"} margin={"10px 35px"}>
                    <Img src={page} alt="" width={120} />
                    <Tittle1>页面设计器</Tittle1>
                    <Tittle2>
                      通过对所需物料的拖拽、组合等方式来完成整个页面设计稿
                    </Tittle2>
                  </Container>

                  <Container width={"27%"} margin={"10px 35px"}>
                    <Img src={wuliao} alt="" width={120} />
                    <Tittle1>物料体系</Tittle1>
                    <Tittle2>物料体系是 lugia-mega 重要的生产力要素</Tittle2>
                  </Container>

                  <Container width={"27%"} margin={"10px 35px"}>
                    <Img src={developTool} alt="" width={120} />
                    <Tittle1>开发工具链</Tittle1>
                    <Tittle2>
                      提供开发现代单页应用需要的所有环境，是 lugia-mega
                      组成部分的链接器
                    </Tittle2>
                  </Container>

                  <Container width={"27%"} margin={"10px 35px"}>
                    <Img src={model} alt="" width={120} />
                    <Tittle1>模型规范</Tittle1>
                    <Tittle2>
                      模型规范分离了用户视图和业务逻辑，lugia-mega
                      可以复用已有项目的业务模型
                    </Tittle2>
                  </Container>
                </FlexBox>
              </MidBlock>
            </Col>
            <Col span={5} xl={{ span: 1 }} xxl={{ span: 3 }}>
              <Block> </Block>
            </Col>
          </Row>
        </Wrapper>
        <Foot />
      </React.Fragment>
    );
  }
}
