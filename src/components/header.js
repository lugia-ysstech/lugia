import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Icon, Grid } from "@lugia/lugia-web";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";
import Search from "../search";
import { linkToUrl } from "../support/commonMethods";

import logo from "../../public/lugia-logo.png";

const { themeColor } = colorsFunc();
const { Row, Col } = Grid;

const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;
`;
const Head = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 34px;
  margin: 24px 0 0 0;
  float: left;
  cursor: pointer;
`;
const SearchBox = styled.div`
  height: 100%;
  padding-top: 10px;
  float: left;
`;
const GuideWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
const HeadIndex = styled.a`
  line-height: 80px;
  margin-left: 50px;
  font-size: 14px;
  color: ${props => (props.active ? "#4d63ff" : "#50575d")};
  position: relative;
  &:hover {
    color: ${themeColor};
  }
  @media (max-width: 1720px) {
    margin-left: 30px;
  }
  @media (max-width: 1550px) {
    margin-left: 20px;
  }
  @media (max-width: 1440px) {
    display: none;
  }
  &::after {
    display: ${props => (props.active ? "true" : "none")};
    content: "";
    position: absolute;
    left: 0px;
    bottom: -8px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: ${themeColor};
  }
`;
const GitIconContainer = styled.a`
  height: 80px;
  width: 90px;
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
  margin-left: 8px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  background: #f2f2f2;
  text-align: center;
  line-height: 30px;
  position: relative;
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

export default class Header extends Component {
  static getDerivedStateFromProps(defProps: any, stateProps: any) {
    const urlPath = window.location.hash;
    const path = urlPath === "#/" ? "" : urlPath.match(/[^(#|\/)]+/)[0];

    if (!stateProps) {
      return {
        current: path
      };
    }
    return {
      current: "current" in defProps ? path : stateProps.current
    };
  }

  constructor(props) {
    super(props);
    this.asyncGetStar();
  }

  render() {
    const { stars, current } = this.state;
    const isTutorial = current === "tutorial";
    return (
      <Fragment>
        <Row>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
            <Wrapper> </Wrapper>
          </Col>
          <Col span={22} md={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 20 }}>
            <Head title="head">
              <Logo src={logo} alt="" onClick={() => linkToUrl("/home")} />
              <SearchBox>
                <Search />
              </SearchBox>
              <GuideWrap>
                <Row>
                  <Col
                    span={0}
                    lg={{ span: 0 }}
                    xl={{ span: 24 }}
                    xxl={{ span: 24 }}
                  >
                    <HeadIndex onClick={() => linkToUrl("/design/introduce")}>
                      设计指南
                    </HeadIndex>
                    <HeadIndex onClick={() => linkToUrl("/component")}>
                      lugia-web
                    </HeadIndex>
                    <HeadIndex onClick={() => linkToUrl("/lugia-mega")}>
                      lugia-mega
                    </HeadIndex>
                    <HeadIndex onClick={() => linkToUrl("/logs")}>
                      更新日志
                    </HeadIndex>
                    <HeadIndex onClick={() => linkToUrl("/doc")}>
                      获取文档
                    </HeadIndex>
                    <HeadIndex
                      active={isTutorial}
                      onClick={() => linkToUrl("/tutorial")}
                    >
                      教程中心
                    </HeadIndex>
                  </Col>
                </Row>
              </GuideWrap>

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
            </Head>
          </Col>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
            <Wrapper> </Wrapper>
          </Col>
        </Row>
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
