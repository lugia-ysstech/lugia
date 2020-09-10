import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Grid } from "@lugia/lugia-web";
import Header from "../components/header";
import { Footer } from "../components/footer";
import OpreationProcess from "./graph";
import Video from "./video";
import Search from "../search";

import banner from "./img/banner-background.png";
import basicConstructor from "./img/basic-constructor.png";
import themeConfig from "./img/theme-config.png";
import smartConfig from "./img/smart-config.png";
import assistIllustrate from "./img/assist-illustrate.png";
import advanceDev from "./img/advance-dev.png";
import notebook from "./img/notebook.png";
import notebookMail from "./img/notebook-mail.png";
import videoPoster from "./img/poster_blank.png";
import { linkToUrl } from "../support/commonMethods";

const { Row, Col } = Grid;

const BannerImg = styled.div`
  width: 100%;
  height: 520px;
  background:url("${banner}") no-repeat;
  background-size: auto 520px;
  background-position: center center;
  position:absolute;
  top:0;
  z-index:-1;
  &:after {
    display: inline-block;
    content: "";
    width: 100%;
    height: 170px;
    background: #F6FAFB;
    position: absolute;
    bottom: -170px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
const SearchHeader = styled.div`
  margin-bottom: 25px;
  font-family: PingFangSC-Medium;
  font-size: 36px;
  font-weight: bold;
  color: #50575d;
  text-align: center;
`;
const Content = styled.div`
  width: 100%;
`;
const ContentTitleWrap = styled.div`
  width: 100%;
  height: 100px;
  margin: 30px 0 8px 0;
  display: grid;
  place-items: center;
  position: relative;
`;
const ContentTitleWrapQa = styled(ContentTitleWrap)`
  margin: 50px 0 8px 0;
`;
const ContentTitle = styled.h2`
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #010156;
  &:after {
    display: inline-block;
    content: "";
    width: 36px;
    height: 4px;
    background: #4d68ff;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const VideoCardWrap = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`;
const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;

  & > iframe {
    width: 100%;
    height: 100%;
  }
`;
const VideoTitle = styled.div`
  width: 100%;
  margin-top: 16px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #50575d;
  text-align: center;
`;

const OperationalProcessWrap = styled.div`
  width: 100%;
  height: 320px;
  background: #fafafc;
  display: grid;
  place-items: center;
  overflow-x: auto;
  overflow-y: hidden;
`;

const FeatureReferenceWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const FeatureReferenceCradWrap = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
const FeatureReferenceCradInner = styled.div`
  display: inline-block;
`;
const ImageWrap = styled.div`
  width: 48px;
  height: 48px;
  background: url(${props => (props.bgImage ? props.bgImage : "")}) no-repeat;
  background-size: contain;
`;
const FeatureReferenceCradTitle = styled.a`
  display: block;
  height: 22px;
  line-height: 22px;
  margin: 10px 0 12px 0;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  font-weight: bold;
  color: #50575d;
  text-align: left;
`;
const FeatureReferenceCradItem = styled.a`
  display: block;
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #50575d;
  text-align: left;
  &:hover {
    color: #4d68ff;
  }
`;

const FeedbackWrap = styled.div`
  width: 100%;
`;
const FeedbackCardWrap = styled.div`
  width: 100%;
  height: 130px;
  padding: 0 20px;
  display: grid;
  place-items: center;
  background: #d4e1ff30;
`;
const MailFeedbackCardWrap = styled(FeedbackCardWrap)`
  background: #cae6ff30;
`;
const MailFeedbackCardWrapInner = styled.div`
  width: 100%;
  display: flex;
`;
const FeedbackImg = styled.div`
  width: 42px;
  height: 50px;
  flex-shrink: 0;
  background: url(${props => (props.bgImage ? props.bgImage : "")}) no-repeat;
`;
const FeedbackContent = styled.div`
  margin-left: 18px;
`;
const FeedbackTitle = styled.a`
  display: block;
  height: 22px;
  margin-bottom: 8px;
  line-height: 22px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  font-weight: bold;
  color: #50575d;
  &:hover {
    color: #4d68ff;
  }
`;
const FeedbackDesc = styled.div`
  height: 20px;
  line-height: 20px;
  font-family: PingFangSC-Regular;
  word-wrap: break-word;
  font-size: 14px;
  color: #747e90;
`;

const featureReferenceData = [
  {
    image: basicConstructor,
    title: "基础搭建",
    item: [
      { itemTitle: "创建项目", itemUrl: "/tutorial/pages/specific-introduction" },
      { itemTitle: "常规建页", itemUrl: "/tutorial/pages/normal-specific-introduction" },
      {
        itemTitle: "智能建页",
        itemUrl: "/tutorial/pages/intelligence-specific-introduction"
      }
    ]
  },
  {
    image: themeConfig,
    title: "主题配置",
    item: [
      { itemTitle: "主题面板", itemUrl: "/tutorial/pages/theme-panel" },
      { itemTitle: "设置公共值", itemUrl: "/tutorial/pages/public-value-set" },
      { itemTitle: "设置组件库", itemUrl: "/tutorial/pages/component-set" }
    ]
  },
  {
    image: smartConfig,
    title: "灵活配置",
    item: [
      { itemTitle: "导入页面", itemUrl: "/tutorial/pages/import-page" },
      { itemTitle: "modal管理", itemUrl: "/tutorial/pages/model-management" },
      { itemTitle: "浅谈智能布局", itemUrl: "/tutorial/pages/discusses-layout" }
    ]
  },
  {
    image: assistIllustrate,
    title: "辅助说明",
    item: [
      { itemTitle: "设置", itemUrl: "/tutorial/pages/setting" },
      { itemTitle: "查看", itemUrl: "/tutorial/pages/check" },
      { itemTitle: "导出", itemUrl: "/tutorial/pages/export" }
    ]
  },
  {
    image: advanceDev,
    title: "高阶开发",
    item: [
      {
        itemTitle: "导出自定义组件",
        itemUrl: "/tutorial/pages/custom-component"
      },
      { itemTitle: "自定义模板", itemUrl: "/tutorial/pages/custom-template" }
    ]
  }
];

const getFeatureReferenceCradItem = data => {
  return (
    data &&
    data.map(item => {
      const { itemTitle, itemUrl } = item;
      return (
        <Row>
          <Col
            span={0}
            sm={{ span: 0 }}
            md={{ span: 24 }}
            xl={{ span: 24 }}
            xxl={{ span: 24 }}
          >
            <FeatureReferenceCradItem onClick={() => linkToUrl(itemUrl)}>
              {itemTitle}
            </FeatureReferenceCradItem>
          </Col>
        </Row>
      );
    })
  );
};
const getFeatureReferenceContent = data => {
  return (
    data &&
    data.map(child => {
      const { title, image, item } = child;
      return (
        <FeatureReferenceCradWrap>
          <FeatureReferenceCradInner>
            <ImageWrap bgImage={image} />
            <FeatureReferenceCradTitle>{title}</FeatureReferenceCradTitle>
            {getFeatureReferenceCradItem(item)}
          </FeatureReferenceCradInner>
        </FeatureReferenceCradWrap>
      );
    })
  );
};

export default class TutorialCenter extends Component {
  render() {
    return (
      <Fragment>
        <BannerImg />
        <Row>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
          <Col span={22} md={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
            <Header />
            <SearchWrap>
              <SearchHeader>Hi~请问有什么可以帮您？</SearchHeader>
              <Search type={"tutorial"} />
            </SearchWrap>
            <Content>
              <ContentTitleWrap>
                <ContentTitle>基础教程</ContentTitle>
              </ContentTitleWrap>
              <Row
                gutter={[
                  { xs: 18, sm: 18, md: 18, xl: 18, xxl: 18, lg: 18 },
                  { xs: 18, sm: 18, md: 18, xl: 18, xxl: 18, lg: 18 }
                ]}
              >
                <Col span={8} sm={{ span: 24 }} xl={{ span: 8 }}>
                  <VideoCardWrap>
                    <VideoWrap>
                      <Video
                        src="http://139.9.26.43/video//A03.mp4"
                        switchSize={"small"}
                        poster={videoPoster}
                      />
                    </VideoWrap>
                  </VideoCardWrap>
                  <VideoTitle>新功能介绍</VideoTitle>
                </Col>
                <Col span={8} sm={{ span: 24 }} xl={{ span: 8 }}>
                  <VideoCardWrap>
                    <VideoWrap>
                      <Video
                        switchSize={"small"}
                        src="http://139.9.26.43/video//A01.mp4"
                        poster={videoPoster}
                      />
                    </VideoWrap>
                  </VideoCardWrap>
                  <VideoTitle>快速入手</VideoTitle>
                </Col>
                <Col span={8} sm={{ span: 24 }} xl={{ span: 8 }}>
                  <VideoCardWrap>
                    <VideoWrap>
                      <Video
                        switchSize={"small"}
                        src="http://139.9.26.43/video//A02.mp4"
                        poster={videoPoster}
                      />
                    </VideoWrap>
                  </VideoCardWrap>
                  <VideoTitle>常规面板</VideoTitle>
                </Col>
              </Row>

              <ContentTitleWrap>
                <ContentTitle>操作流程</ContentTitle>
              </ContentTitleWrap>
              <OperationalProcessWrap>
                <OpreationProcess />
              </OperationalProcessWrap>

              <ContentTitleWrap>
                <ContentTitle>功能导示</ContentTitle>
              </ContentTitleWrap>
              <FeatureReferenceWrap>
                {getFeatureReferenceContent(featureReferenceData)}
              </FeatureReferenceWrap>

              <ContentTitleWrapQa>
                <ContentTitle>无法解决您的问题?</ContentTitle>
              </ContentTitleWrapQa>
              <FeedbackWrap>
                <Row
                  gutter={[
                    { xs: 20, sm: 20, md: 20, xl: 20, xxl: 20, lg: 20 },
                    { xs: 20, sm: 20, md: 20, xl: 20, xxl: 20, lg: 20 }
                  ]}
                >
                  <Col span={12} sm={{ span: 24 }} xl={{ span: 12 }}>
                    <FeedbackCardWrap>
                      <MailFeedbackCardWrapInner>
                        <FeedbackImg bgImage={notebook}></FeedbackImg>
                        <FeedbackContent>
                          <FeedbackTitle
                            /*
                            暂时保留
                            onClick={() => linkToUrl("/tutorial/feedback")}
                            */
                            href="https://github.com/lugia-ysstech/lugia/issues"
                          >
                            提交反馈
                          </FeedbackTitle>
                          <FeedbackDesc>
                            欢迎将您需要的教程告诉我们，我们会定期根据大家的需求进行优化
                          </FeedbackDesc>
                        </FeedbackContent>
                      </MailFeedbackCardWrapInner>
                    </FeedbackCardWrap>
                  </Col>
                  <Col span={12} sm={{ span: 24 }} xl={{ span: 12 }}>
                    <MailFeedbackCardWrap>
                      <MailFeedbackCardWrapInner>
                        <FeedbackImg bgImage={notebookMail}></FeedbackImg>
                        <FeedbackContent>
                          <FeedbackTitle href="mailto:Lugia@ysstech.com">
                            Lugia@ysstech.com
                          </FeedbackTitle>
                          <FeedbackDesc>
                            请在邮件中详细描述您的问题，我们将在工作日24小时内联系您
                          </FeedbackDesc>
                        </FeedbackContent>
                      </MailFeedbackCardWrapInner>
                    </MailFeedbackCardWrap>
                  </Col>
                </Row>
              </FeedbackWrap>
            </Content>
          </Col>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
        </Row>
        <Footer />
      </Fragment>
    );
  }
}
