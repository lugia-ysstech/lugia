/**
 *
 * create by LYQ
 *
 * @flow
 */
import React, { Fragment } from "react";
import { Theme, Icon, Button } from "@lugia/lugia-web";
import styled from "styled-components";
import { go } from "@lugia/lugiax-router";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";
import HeaderNav from "../nav";
import Widget from "@lugia/lugia-web/dist/consts/index";

import appBanner from "../../../public/home/appbanner.png";
import appSlogan from "../../../public/home/app-slogan.png";
import designValue from "../../../public/home/design-value.png";
import designPrinciple from "../../../public/home/design-principle.png";
import visualPrinciple from "../../../public/home/visual-principle.png";

const { themeColor } = colorsFunc();

const GitIcon = styled.div`
  width: 36px;
  height: 36px;
  font-size: 21px;
  border-radius: 50%;
  box-shadow: 0 0 6px 0 rgba(51, 51, 51, 0.3);
  text-align: center;
  line-height: 42px;
  margin-right: 10px;
  &:hover {
    color: ${themeColor};
  }
`;

const GitStar = styled.div`
  padding: 0 10px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  background: #f2f2f2;
  text-align: center;
  line-height: 30px;
  position: relative;
  &:hover {
    color: ${themeColor};
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    left: -12px;
    top: 7px;
    width: 0px;
    height: 0px;
    border-top: 8px solid transparent;
    border-right: 8px solid #f2f2f2;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 390px;
`;
const BannerImg = styled.div`
  width: 100%;
  height: 390px;
  background:url("${appBanner}") no-repeat;
  background-size: auto 390px;
  background-position: center center;
  position:absolute;
  top:0;
  z-index:-1;
`;

const SloganWrap = styled.div`
  width: 100%;
  height: 330px;
  display: grid;
  place-items: center;
`;
const SloganImg = styled.div`
  width: 100%;
  height: 170px;
  background: url(${appSlogan}) no-repeat center center;
  background-size: auto 100%;
`;

const ContentWrap = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const H1 = styled.div`
  font-size: 36px;
  color: #fe5b02;
  font-family: "Helvetica Neue";
  font-weight: 800;
  text-align: center;
  margin: 8px 0;
`;
const Text = styled.div`
  font-size: 15px;
  color: ${props => props.color || "#747E90"};
  line-height: 1.6;
  margin: 12px 0 18px;
  text-align: justify;
`;
const StartPanle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;
const GitIconContainer = styled.a`
  height: 40px;
  display: block;
  text-align: center;
  line-height: 38px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #000;
  align-items: center;
`;

const ModuleWrap = styled.div`
  width: 100%;
  padding-bottom: 60px;
`;
const ModuleTitle = styled.div`
  font-family: PingFangSC-Thin;
  font-size: 16px;
  color: #010156;
  margin-bottom: 12px;
`;
const ItemContent = styled.div`
  width: 100%;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentCard = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  background: ${props => (props.bgColor ? props.bgColor : "#feecb8")};
`;
const ContentCardImg = styled.img`
  height: 180px;
  position: absolute;
  right: 0;
`;
const ContentCardTitleWrap = styled.div`
  height: 100px;
  padding: 10px 0;
  font-family: PingFangSC-Regular;
  position: absolute;
  left: 28px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ContentCardTitle = styled.div`
  font-size: 16px;
  color: #010156;
`;
const ContentCardStart = styled.div`
  font-size: 14px;
  color: #4d68ff;
  &:hover {
    color: #8c9dff;
  }
`;

const TextBox = styled.div`
  width: 100%;
  position: relative;
  overflow-x: scroll;
`;
const TextScrollBox = styled.div`
  width: 878px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const TextCard = styled.div`
  width: 274px;
  height: 350px;
  position: relative;
  border-radius: 10px 10px 4px 4px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const TextCardContent = styled.div`
  width: 100%;
  padding: 17px 19px;
`;
const SolutionH2 = styled.div`
  font-size: 20px;
  color: ${props => props.color || "#000033"};
  font-family: "Helvetica Neue";
  font-weight: 800;
  margin: ${props => props.margin || "13px 0"};
  cursor: pointer;
  text-align: center;
`;
const TextContent = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #747e90;
  text-align: justify;
  line-height: 22px;
`;
const VideoBoxWrap = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`;
const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;

  & > iframe {
    width: 100%;
    height: 100%;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  background: #f8f9fa;
`;

const startTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 200,
        height: 40
      }
    },
    ButtonText: {
      normal: {
        font: {
          size: 16
        }
      }
    }
  }
};
const solutionTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: "100%",
        height: 40
      }
    },
    ButtonText: {
      normal: {
        font: {
          size: 16
        }
      }
    }
  }
};

const linkToUrl = (target: string) => {
  target && go({ url: target });
};

export default class Pages extends React.Component<any, any> {
  static getDerivedStateFromProps(defProps: any, stateProps: any) {
    if (!stateProps) {
      return {};
    }
    return {
      current: "current" in defProps ? defProps.value : stateProps.current
    };
  }

  constructor(props) {
    super(props);
    this.asyncGetStar();
  }

  render() {
    const { stars } = this.state;
    return (
      <Fragment>
        <BannerImg />
        <HeaderWrap>
          <HeaderNav />
          <SloganWrap>
            <SloganImg />
          </SloganWrap>
        </HeaderWrap>

        <ContentWrap>
          <H1>LUGIA DESIGN</H1>
          <Text>
            Lugia的诞生就是要树立中后台组件化的标杆。我们不仅仅创造了一套属于通用的开源组件及其设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。
          </Text>
          <StartPanle>
            <Theme config={startTheme}>
              <Button
                type="primary"
                onClick={() => this.linkToUrl("/component/affix")}
              >
                开始使用
              </Button>
            </Theme>

            <GitIconContainer
              href={"https://github.com/lugia-ysstech/lugia"}
              target={"_blank"}
            >
              <GitIcon>
                {" "}
                <Icon iconClass={"lugia-icon-logo_github"} />{" "}
              </GitIcon>
              <GitStar>Star {stars}</GitStar>
            </GitIconContainer>
          </StartPanle>
          <ModuleWrap>
            <ModuleTitle>设计指南</ModuleTitle>
            <ItemContent>
              <ContentCard bgColor="#FEECB8">
                <ContentCardImg src={designValue} />
                <ContentCardTitleWrap>
                  <ContentCardTitle>设计价值观</ContentCardTitle>
                  <ContentCardStart onClick={() => linkToUrl("/design/core")}>
                    开始使用 >>
                  </ContentCardStart>
                </ContentCardTitleWrap>
              </ContentCard>
              <ContentCard bgColor="#EBEDFF">
                <ContentCardImg src={designPrinciple} />
                <ContentCardTitleWrap>
                  <ContentCardTitle>设计原则</ContentCardTitle>
                  <ContentCardStart
                    onClick={() => linkToUrl("/design/alignment")}
                  >
                    开始使用 >>
                  </ContentCardStart>
                </ContentCardTitleWrap>
              </ContentCard>
              <ContentCard bgColor="#E0F0FF">
                <ContentCardImg src={visualPrinciple} />
                <ContentCardTitleWrap>
                  <ContentCardTitle>视觉原则</ContentCardTitle>
                  <ContentCardStart onClick={() => linkToUrl("/design/layout")}>
                    开始使用 >>
                  </ContentCardStart>
                </ContentCardTitleWrap>
              </ContentCard>
            </ItemContent>
          </ModuleWrap>
          <ModuleWrap>
            <ModuleTitle>解决方案</ModuleTitle>
            <Theme config={solutionTheme}>
              <TextBox>
                <TextScrollBox>
                  <TextCard>
                    <TextCardContent>
                      <SolutionH2
                        onClick={() => linkToUrl("/component/lugiax")}
                      >
                        LugiaX
                      </SolutionH2>
                      <TextContent>
                        一个基于 Redux
                        的前端状态管理工具。提供简单高效的全局状态管理方案、
                        基于 async/await 的异步操作、快捷的双向绑定。LugiaX
                        内置路由库，对 react-router
                        做了轻量封装，使用起来更加简单明了。
                      </TextContent>
                    </TextCardContent>
                    <Button
                      type="primary"
                      onClick={() => linkToUrl("/component/lugiax")}
                    >
                      开始使用
                    </Button>
                  </TextCard>
                  <TextCard>
                    <TextCardContent>
                      <SolutionH2 onClick={() => linkToUrl("/component")}>
                        Lugia Web
                      </SolutionH2>
                      <TextContent>
                        一套基于 Lugia Design 的高品质 React
                        组件库，满足金融行业高性能组件的需求，适用于 Web 端。
                      </TextContent>
                    </TextCardContent>

                    <Button
                      type="primary"
                      onClick={() => linkToUrl("/component")}
                    >
                      开始使用
                    </Button>
                  </TextCard>
                  <TextCard>
                    <TextCardContent>
                      <SolutionH2 onClick={() => linkToUrl("/lugia-mega")}>
                        Lugia Mega
                      </SolutionH2>
                      <TextContent>
                        标准、高效、开箱即用的前端可视化开发工具。Lugia Mega
                        是一个无需环境搭建、快速上手的跨平台桌面应用（Mac 和
                        Windows）。为开发人员提供可视化、屏蔽底层、元信息式的开发方式。帮助设计师、产品经理快速设计原型，成果可以直接让开发人员使用。Lugia
                        Mega
                        贯穿了整个项目的生命周期，让您极速构建前端应用、轻松管理所有项目。
                      </TextContent>
                    </TextCardContent>
                    <Button
                      type="primary"
                      onClick={() => linkToUrl("/lugia-mega")}
                    >
                      开始使用
                    </Button>
                  </TextCard>
                </TextScrollBox>
              </TextBox>
            </Theme>
          </ModuleWrap>
          <ModuleWrap>
            <ModuleTitle>新增功能</ModuleTitle>
            <VideoBoxWrap>
              <VideoBox>
                <iframe
                  src="//player.bilibili.com/player.html?aid=67434572&cid=116925497&page=1"
                  scrolling="no"
                  border="0"
                  frameBorder="no"
                  framespacing="0"
                  allowFullScreen="true"
                />
              </VideoBox>
            </VideoBoxWrap>
          </ModuleWrap>
        </ContentWrap>

        <Footer />
      </Fragment>
    );
  }

  async asyncGetStar() {
    const result = await fetch(
      "https://api.github.com/repos/lugia-ysstech/lugia",
      {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => response.json())
      .then(data => {
        return data;
      });
    const { stargazers_count } = result;
    this.setState({
      stars: stargazers_count
    });
  }
}
