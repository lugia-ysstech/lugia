/**
 *
 * create by Shine_Lee
 *
 * @flow
 */

import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BackTop } from "@lugia/lugia-web";
import { linkToUrl } from "../../support/commonMethods";
import { tutorialPageData } from "../data/tutorialData";
import Video from "../video";

const Container = styled.div`
  width: 100%;
  padding: 45px 50px 100px 0;
`;

const TitleWrap = styled.div`
  color: #50575d;
  font-size: 24px;
  font-family: PingFangSC-Medium;
`;
const DescWrap = styled.div`
  margin: 12px 0 30px 0;
  color: #50575d;
  font-size: 14px;
  font-family: PingFangSC-Regular;
`;
const SkipWrap = styled(DescWrap)`
  display: inline-block;
  color: #4d68ff;
  cursor: pointer;
  &:hover {
    color: #8c9eff;
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

const StepWrap = styled.div`
  width: 100%;
  margin-top: 24px;
  color: #4d68ff;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  display: flex;
  justify-content: space-between;
`;
const PreStepWrap = styled.a`
  height: 20px;
  line-height: 20px;
`;
const NextStepWrap = styled(PreStepWrap)``;

export default class TutorialPage extends Component {
  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.hash;
    const pathType = path.match(/[^/]+/g)[3].match(/[^#]+/g)[0];
    if (!stateProps) {
      return {
        pathType
      };
    }
    return {
      pathType: "pathType" in stateProps ? stateProps.pathType : pathType
    };
  }

  getPageData = () => {
    const dataLen = Object.keys(tutorialPageData).length;
    const { pathType } = this.state;
    return { pageContent: tutorialPageData[pathType], dataLen };
  };

  getNewID = isPre => {
    const {
      pageContent: { id },
      dataLen
    } = this.getPageData();
    if (isPre) {
      return id - 1 < 1 ? 1 : id - 1;
    } else {
      return id + 1 > dataLen ? dataLen : id + 1;
    }
  };

  handlePreStepChange = (isPre = false) => {
    const newID = this.getNewID(isPre);
    Object.keys(tutorialPageData).forEach(item => {
      if (tutorialPageData[item].id === newID) {
        linkToUrl(`/tutorial/pages/${item}`);
      }
    });
  };

  getDesc = (desc, descSkip) => {
    if (descSkip) {
      const startPos = desc.indexOf("「");
      const endPos = desc.indexOf("」");

      const preContent = desc.substring(0, startPos - 1);
      const skipContent = desc.substring(startPos, endPos + 1);
      const sufContent = desc.substring(endPos + 1);

      return (
        <Fragment>
          {preContent}
          <SkipWrap onClick={()=>{linkToUrl(`/tutorial/pages/${descSkip}`)}}>{skipContent}</SkipWrap>
          {sufContent}
        </Fragment>
      );
    }
    return desc;
  };

  getPageContent = () => {
    const { pageContent } = this.getPageData();
    if (pageContent) {
      const { title, desc, videoSrc, descSkip = "" } = pageContent;
      return (
        <Fragment>
          <TitleWrap>{title}</TitleWrap>
          {/*<DescWrap>{desc}</DescWrap>*/}
          <DescWrap>{this.getDesc(desc, descSkip)}</DescWrap>
          <VideoCardWrap>
            <VideoWrap>
              <Video src={videoSrc}></Video>
            </VideoWrap>
          </VideoCardWrap>
        </Fragment>
      );
    }
    return null;
  };
  getStepContent = () => {
    const { pageContent } = this.getPageData();
    if (pageContent) {
      return (
        <StepWrap>
          <PreStepWrap onClick={() => this.handlePreStepChange(true)}>
            &lt;&nbsp; 上一步
          </PreStepWrap>
          <NextStepWrap onClick={() => this.handlePreStepChange()}>
            下一步 &nbsp;&gt;
          </NextStepWrap>
        </StepWrap>
      );
    }
  };

  render() {
    return (
      <Container>
        {this.getPageContent()}
        {this.getStepContent()}
        <BackTop />
      </Container>
    );
  }
}
