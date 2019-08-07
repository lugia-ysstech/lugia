/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {go} from '@lugia/lugiax-router';
import { Grid , Icon} from '@lugia/lugia-web';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';

import mac from '../../public/mega/mac.png';
import windows from '../../public/mega/windows.png';
import mega from '../../public/mega/2.png';

const { themeColor } = colorsFunc();
const { Row, Col } = Grid;
const Block= styled.div`
	width:100%;
  min-height:20px;
`;

const Wrapper = styled.div`
	width:100%;	
	transform:translateY(30%);
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
`;
const Header = styled.div`
 height:60px;
	width:1000px;	
`;

const Logo = styled.div`
  height: 50px;
  line-height: 50px;
  color:${themeColor};
  font-size: 18px;
  vertica-align: middle;
  margin-top: 70px;
  text-align:center;
  cursor:pointer;
`;


const Return = styled(Icon)`
  vertical-align: middle !important;
  margin:0 6px;
`;

const Main = styled.div`
  height:300px;
	width:1000px;
`;

const Tittle1 = styled.p`
 font-size:40px;
	color:#50575d;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	margin-left:263px;
	margin-top:100px;
	font-weight: 500;
`;

const Tittle2 = styled.p`
  font-size:28px;
	color:#747e90;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	margin-left:345px;
	margin-top:20px;
`;

const Mac = styled.a`
  display:inline-block;
  height:48px;
	width:220px;
	position:absolute;
	background-color:#000;
	border-radius: 6px;
	margin-left:260px;
	margin-top:68px;
	text-align:center;
	line-height:48px;
	transition:0.2s;
	&:hover {
    background-color:#333;
  }
`;

const MacLogo= styled.div`
  height:20px;
	width:20px;
	background:url(${mac}) no-repeat;
	display:inline-block;
	vertical-align:middle;
	margin-right:10px;
`;

const Window= styled.a`
  display:inline-block;
  height:48px;
	width:220px;
	position:absolute;
	background-color:#4d63ff;
	border-radius: 6px;
	margin-left:526px;
	margin-top:68px;
	transition:0.2s;
	text-align:center;
	line-height:48px;
	&:hover {
	background-color:#384ddd;
}
`;


const WindowLogo= styled.div`
  height:15px;
	width:15px;
	background:url(${windows}) no-repeat;
	display:inline-block;
	vertical-align:middle;
	margin-right:10px;
`;

const Span= styled.span`
  font-size:18px;
	color:#fff;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	text-align: center;
	vertical-align:middle;
`;

const Foot= styled.div`
  height:280px;
	width:100%;
	background:url(${mega}) no-repeat ;
	background-size:100% 100%;  
	position:absolute;
	bottom:0;
`;


export default class Mega extends React.Component {

  render() {

    return (
      <React.Fragment>

        <Row>
          <Col span={5} xl={{ span: 4 }}  xxl={{ span: 5 }}>
            <Block> </Block>
          </Col>
          <Col span={14} xl={{ span: 16 }}  xxl={{ span: 14 }}>
            <Wrapper>

              <Main>
                <Tittle1>欢迎使用Lugia-mega</Tittle1>
                <Tittle2>请选择您要安装的操作系统</Tittle2>
                <Mac href="#">
                  <MacLogo />
                  <Span>点击下载mac版</Span>
                </Mac>
                <Window href="#">
                  <WindowLogo />
                  <Span>点击下载window版</Span>
                </Window>
              </Main>
              <Header onClick={e => {
                go({ url:'/home' });
              }}>
                <Logo><Return iconClass="lugia-icon-direction_Left"/>返回lugia官网</Logo>
              </Header>
            </Wrapper>
          </Col>
          <Col span={5} xl={{ span: 4 }}  xxl={{ span: 5 }}>
            <Block > </Block>
          </Col>
        </Row>
        <Foot />
      </React.Fragment>
    );
  }


}
