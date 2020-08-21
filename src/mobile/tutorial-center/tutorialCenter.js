import React, { Fragment } from "react";
import styled from "styled-components";
import { Theme, Button } from "@lugia/lugia-web";
import { getBorderRadius } from "@lugia/theme-utils";
import Widget from "@lugia/lugia-web/dist/consts/index";
import HeaderNav from "../nav";

import banner from "./img/banner.png";
import {linkToUrl} from "../../support/commonMethods";

const HeaderWrap = styled.div`
  width: 100%;
  height: 350px;
`;
const BannerImg = styled.div`
  width: 100%;
  height: 350px;
  background:url("${banner}") no-repeat;
  background-size: auto 390px;
  background-position: center center;
  position:absolute;
  top:0;
  z-index:-1;
`;
const HeaderContent = styled.div`
  width: 100%;
  height: 290px;
  display: grid;
  place-items: center;
`;
const HeaderContentInner = styled.div`
  text-align: center;
`;
const HeaderQuestion = styled.h2`
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #000033;
  text-align: center;
  margin-bottom: 24px;
`;

const ContentWrap = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 80px;
`;

const VideoCardOuterWrap = styled.div`
  width: 100%;
`;
const VideoCardTitle = styled.div`
  margin: 24px 0 10px 0;
  font-family: PingFangSC-Thin;
  font-size: 16px;
  color: #010156;
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

const buttonTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 200,
        height: 36,
        borderRadius: getBorderRadius(4),
        background: {
          image: "linear-gradient(0deg, #4D68FF 0%, #8093FF 100%)"
        }
      }
    },
    ButtonText: {
      normal: {
        color: "#fff",
        font: {
          size: 16
        }
      },
      focus: {
        color: "#fff"
      }
    }
  }
};

export default class TutorialCenterMobile extends React.Component<any, any> {
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
  }

  render() {
    return (
      <Fragment>
        <BannerImg />
        <HeaderWrap>
          <HeaderNav />
          <HeaderContent>
            <HeaderContentInner>
              <HeaderQuestion>Hi~请问有什么可以帮您？</HeaderQuestion>
              <Theme config={buttonTheme}>
                <Button onClick={() => linkToUrl("/tutorial/pages")}>查看教程</Button>
              </Theme>
            </HeaderContentInner>
          </HeaderContent>
        </HeaderWrap>

        <ContentWrap>
          <VideoCardOuterWrap>
            <VideoCardTitle>新功能介绍</VideoCardTitle>
            <VideoCardWrap>
              <VideoWrap>
                <iframe
                  src="//player.bilibili.com/player.html?aid=67434572&cid=116925497&page=1"
                  scrolling="no"
                  border="0"
                  frameBorder="no"
                  framespacing="0"
                  allowFullScreen="true"
                />
              </VideoWrap>
            </VideoCardWrap>
          </VideoCardOuterWrap>
          <VideoCardOuterWrap>
            <VideoCardTitle>快速入手</VideoCardTitle>
            <VideoCardWrap>
              <VideoWrap>
                <iframe
                  src="//player.bilibili.com/player.html?aid=67434572&cid=116925497&page=1"
                  scrolling="no"
                  border="0"
                  frameBorder="no"
                  framespacing="0"
                  allowFullScreen="true"
                />
              </VideoWrap>
            </VideoCardWrap>
          </VideoCardOuterWrap>
          <VideoCardOuterWrap>
            <VideoCardTitle>常规面板</VideoCardTitle>
            <VideoCardWrap>
              <VideoWrap>
                <iframe
                  src="//player.bilibili.com/player.html?aid=67434572&cid=116925497&page=1"
                  scrolling="no"
                  border="0"
                  frameBorder="no"
                  framespacing="0"
                  allowFullScreen="true"
                />
              </VideoWrap>
            </VideoCardWrap>
          </VideoCardOuterWrap>
        </ContentWrap>
      </Fragment>
    );
  }
}
