/**
 *
 * create by Shine_Lee
 *
 * @flow
 */

import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BackTop } from "@lugia/lugia-web";
import { pageData } from "../../../tutorial-center/pages/pageData";

const Container = styled.div`
  width: 100%;
  padding: 45px 20px 100px 20px;
`;

const TitleWrap = styled.div`
  padding-bottom: 24px;
  color: #50575d;
  font-size: 24px;
  font-family: PingFangSC-Medium;
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
    const dataLen = Object.keys(pageData).length;
    const { pathType } = this.state;
    return { pageContent: pageData[pathType], dataLen };
  };
  getPageContent = () => {
    const { pageContent } = this.getPageData();
    if (pageContent) {
      const { title, videoSrc } = pageContent;
      return (
        <Fragment>
          <TitleWrap>{title}</TitleWrap>
          <VideoCardWrap>
            <VideoWrap>
              <iframe
                src={videoSrc}
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen="true"
              />
            </VideoWrap>
          </VideoCardWrap>
        </Fragment>
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        {this.getPageContent()}
        <BackTop />
      </Container>
    );
  }
}
