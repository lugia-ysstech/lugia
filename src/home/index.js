/**
 *
 * create by LYQ
 *
 * @flow
 */

import * as React from "react";
import { Theme, Grid, Icon, Button, Tabs } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts/index";
import styled from "styled-components";
import { go } from "@lugia/lugiax-router";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";
import Search from "../search";

import logo from "../../public/lugia-logo.png";
import slogan from "../../public/home/slogan.png";
import logoIntroduction from "../../public/home/logo-introduction.png";
import designValue from "../../public/home/design-value.png";
import designPrinciple from "../../public/home/design-principle.png";
import visualPrinciple from "../../public/home/visual-principle.png";
import staticBulb from "../../public/home/static-bulb.png";
import dynamicBulb from "../../public/home/dynamic-bulb.gif";
import staticLeaf from "../../public/home/static-leaf.png";
import dynamicLeaf from "../../public/home/dynamic-leaf.gif";
import banner from "../../public/home/banner.png";

const { themeColor } = colorsFunc();

const { Row, Col } = Grid;

const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;
`;

const BannerImg = styled.div`
  width: 100%;
  height: 580px;
  background:url("${banner}") no-repeat;
  background-size: auto 580px;
  background-position: center center;
  position:absolute;
  top:0;
  z-index:-1;
`;

const Head = styled.div`
  height: 80px;
  line-height: 80px;
`;

const SearchBox = styled.div`
  height: 100%;
  padding-top: 10px;
  float: left;
`;

const GitIconContainer = styled.a`
  height: 80px;
  width: 90px;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  margin-left: 50px;
  &:hover {
    color: ${themeColor};
  }
`;
const GitIcon = styled.div`
  width: 28px;
  height: 28px;
  font-size: 16px;
  border-radius: 50%;
  box-shadow: 0 0 6px 0 rgba(51, 51, 51, 0.3);
  display: grid;
  place-items: center;
`;
const GitStar = styled.div`
  width: 55px;
  padding: 0 10px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  background: #f2f2f2;
  text-align: center;
  line-height: 30px;
`;

const HeadIndex = styled.a`
  height: 100%;
  float: right;
  margin-left: 50px;
  font-size: 14px;
  color: #50575d;
  &:hover {
    color: ${themeColor};
  }
`;

const SloganWrap = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
`;
const SloganImgWrap = styled.div`
  position: relative;
  &:hover {
    & > div:nth-child(2) {
      background: url(${dynamicBulb});
      background-size: 100% auto;
    }
    & > div:nth-child(3) {
      background: url(${dynamicLeaf}) no-repeat -10px -16px;
      background-size: 130% auto;
    }
  }
`;
const SloganImg = styled.img`
  width: 647px;
  height: 96px;
  margin-bottom: 50px;
`;
const BulbWrap = styled.div`
  width: 50px;
  height: 52px;
  background: url(${staticBulb});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 267px;
  top: 0px;
`;
const LeafWrap = styled.div`
  width: 45px;
  height: 33px;
  background: url(${staticLeaf});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: -14px;
  top: 52px;
`;

const LugiaIntroduction = styled.div`
  width: 100%;
  height: 168px;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
`;
const LugiaIntroductionInner = styled.div`
  width: 665px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrap = styled.div`
  width: 33%;
  display: grid;
  place-items: center;
`;
const IntroductionLogo = styled.img`
  width: 160px;
`;
const IntroductionContent = styled.div`
  width: 67%;
  height: 105px;
  line-height: 25px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #747e90;
  text-align: justify;
`;

const ItemWrap = styled.div`
  width: 100%;
  margin-top: 90px;
`;
const ItemTitle = styled.div`
  width: 100%;
  height: 33px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #010156;
  position: relative;
  &:after {
    display: inline-block;
    content: "";
    width: 36px;
    height: 4px;
    background: #4d68ff;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const ItemContent = styled.div`
  width: 100%;
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ContentCard = styled.div`
  width: calc((100% - 60px) / 3);
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

const Logo = styled.img`
  height: 34px;
  margin: 24px 0 0 0;
  float: left;
`;

const TabsBlock = styled.div`
  font-family: PingFangSC-Regular;
  width: 100%;
  height: 260px;
  padding: 40px 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TabsBlockTitleWrap = styled.div``;
const TabsBlockTitle = styled.div`
  font-size: 16px;
  color: #010156;
`;
const TabsBlockDesc = styled.div`
  font-size: 14px;
  color: #747e90;
  text-align: justify;
  line-height: 25px;
  margin-top: 16px;
`;
const TabsBlockDetail = styled.div`
  font-size: 14px;
  color: #4d68ff;
`;

const VideoBoxWrap = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-top: 38px;
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
  height: 90px;
  margin-top: 70px;
  background: #f8f9fa;
  display: grid;
  place-items: center;
`;
const CopyRight = styled.div`
  line-height: 25px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #747e90;
  text-align: center;
`;

function linkToUrl(target: string) {
  target && go({ url: target });
}

const solutionData = [
  {
    title: "Lugia Design",
    content: (
      <TabsBlock>
        <TabsBlockTitleWrap>
          <TabsBlockTitle>Lugia Design</TabsBlockTitle>
          <TabsBlockDesc>
            大道至简的设计规范。对于设计来说，知性 可以同时定义为 “
            形式上的优美和极致 ” 和 “ 科学上的精确和简洁
            ”，我们相信知性的设计，实现了二者的完美契合。
          </TabsBlockDesc>
        </TabsBlockTitleWrap>
        <TabsBlockDetail onClick={() => linkToUrl("/design/introduce")}>
          查看详情 >>
        </TabsBlockDetail>
      </TabsBlock>
    ),
    hideCloseBtn: true
  },
  {
    title: "Lugia X",
    content: (
      <TabsBlock>
        <TabsBlockTitleWrap>
          <TabsBlockTitle>Lugia X</TabsBlockTitle>
          <TabsBlockDesc>
            一个基于 Redux 的前端状态管理工具。提供简单高效的全局状态管理方案、
            基于 async/await 的异步操作、快捷的双向绑定。LugiaX 内置路由库，对
            react-router 做了轻量封装，使用起来更加简单明了。
          </TabsBlockDesc>
        </TabsBlockTitleWrap>
        <TabsBlockDetail onClick={() => linkToUrl("/lugiax")}>
          查看详情 >>
        </TabsBlockDetail>
      </TabsBlock>
    )
  },
  {
    title: "Lugia Web",
    content: (
      <TabsBlock>
        <TabsBlockTitleWrap>
          <TabsBlockTitle>Lugia Web</TabsBlockTitle>
          <TabsBlockDesc>
            一套基于 Lugia Design 的高品质 React
            组件库，满足金融行业高性能组件的需求，适用于 Web 端。
          </TabsBlockDesc>
        </TabsBlockTitleWrap>
        <TabsBlockDetail onClick={() => linkToUrl("/component")}>
          查看详情 >>
        </TabsBlockDetail>
      </TabsBlock>
    )
  },
  {
    title: "Lugia mega",
    content: (
      <TabsBlock>
        <TabsBlockTitleWrap>
          <TabsBlockTitle>Lugia mega</TabsBlockTitle>
          <TabsBlockDesc>
            标准、高效、开箱即用的前端可视化开发工具。Lugia Mega
            是一个无需环境搭建、快速上手的跨平台桌面应用（Mac 和
            Windows）。为开发人员提供可视化、屏蔽底层、元信息式的开发方式。帮助设计师、产品经理快速设计原型，成果可以直接让开发人员使用。Lugia
            Mega
            贯穿了整个项目的生命周期，让您极速构建前端应用、轻松管理所有项目。
          </TabsBlockDesc>
        </TabsBlockTitleWrap>
        <TabsBlockDetail onClick={() => linkToUrl("/lugia-mega")}>
          查看详情 >>
        </TabsBlockDetail>
      </TabsBlock>
    )
  }
];

const startButtonTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 224,
        height: 48
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
const tabsTheme = {
  [Widget.Tabs]: {
    Container: {
      normal: {
        width: "100%",
        height: 280
      }
    },
    TitleContainer: {
      normal: {
        width: "20%"
      }
    },
    TabHeader: {
      DefaultTabPan: {
        normal: {
          height: 70
        }
      },
      SelectTabPan: {
        normal: {
          background: {
            color: "#4D68FF0A"
          }
        }
      }
    },
    ContentBlock: {
      normal: {
        background: {
          color: "#F8F9FA"
        }
      }
    }
  }
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
      <React.Fragment>
        <BannerImg />
        <Row>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
          <Col span={22} md={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
            <Head title="head">
              <Logo src={logo} alt="" />
              <SearchBox>
                <Search />
              </SearchBox>

              <GitIconContainer
                href={"https://github.com/lugia-ysstech/lugia"}
                target={"_blank"}
              >
                <GitIcon>
                  {" "}
                  <Icon iconClass={"lugia-icon-logo_github"} />{" "}
                </GitIcon>
                <GitStar>{stars}</GitStar>
              </GitIconContainer>

              <HeadIndex onClick={() => linkToUrl("/logs")}>更新日志</HeadIndex>
              <HeadIndex onClick={() => linkToUrl("/lugia-mega")}>
                lugia-mega
              </HeadIndex>
              <HeadIndex onClick={() => linkToUrl("/component")}>
                lugia-web
              </HeadIndex>
              <HeadIndex onClick={() => linkToUrl("/component/affix")}>
                设计指南
              </HeadIndex>
            </Head>
            <SloganWrap>
              <SloganImgWrap>
                <SloganImg src={slogan} alt="搭你所想,见你所愿" />
                <BulbWrap />
                <LeafWrap />
              </SloganImgWrap>

              <Theme config={startButtonTheme}>
                <Button
                  type="primary"
                  onClick={() => linkToUrl("/component/affix")}
                >
                  开始使用
                </Button>
              </Theme>
            </SloganWrap>
          </Col>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
        </Row>

        <LugiaIntroduction>
          <LugiaIntroductionInner>
            <LogoWrap>
              <IntroductionLogo src={logoIntroduction} />
            </LogoWrap>
            <IntroductionContent>
              在Lugia中，只要通过简单的拖动操作拼出设计稿，成果直接让开发人员使用，从而高效的搭建项目。并且丰富易用的主题样式，高效便捷的模型管理，可以随时灵活调整页面的视觉主题与交互需求。
              真正做到了：
              <span style={{ fontWeight: "bold" }}>
                快捷搭你所想，随时见你所愿
              </span>
              。
            </IntroductionContent>
          </LugiaIntroductionInner>
        </LugiaIntroduction>

        <Row>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
          <Col span={22} md={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
            <ItemWrap>
              <ItemTitle>设计指南</ItemTitle>
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
                    <ContentCardStart
                      onClick={() => linkToUrl("/design/layout")}
                    >
                      开始使用 >>
                    </ContentCardStart>
                  </ContentCardTitleWrap>
                </ContentCard>
              </ItemContent>
            </ItemWrap>
            <ItemWrap>
              <ItemTitle>解决方案</ItemTitle>
              <ItemContent>
                <Theme config={tabsTheme}>
                  <Tabs
                    data={solutionData}
                    tabType={"line"}
                    isShowArrowIcon={false}
                    tabPosition={"left"}
                  />
                </Theme>
              </ItemContent>
            </ItemWrap>
            <ItemWrap>
              <ItemTitle>新增功能</ItemTitle>
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
            </ItemWrap>
          </Col>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
        </Row>
        <Footer>
          <CopyRight>
            Copyright @ 2001-2019 Ysstech,All Rights Reserved 粤ICP备05050184号
          </CopyRight>
        </Footer>
      </React.Fragment>
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
