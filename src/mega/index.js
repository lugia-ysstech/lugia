/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { Grid } from '@lugia/lugia-web';
import Headers from '../nav';

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
  width: 100px;
  margin-left: 40px;
  margin-top: 8px;
  background: url(../../public/mega/logo.png) no-repeat ;
`;

const Main = styled.div`
  height:300px;
	width:1000px;
`;

const Tittle1 = styled.p`
 font-size:28px;
	color:#50575d;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	margin-left:320px;
	margin-top:100px;
	font-weight: 500;
`;

const Tittle2 = styled.p`
  font-size:18px;
	color:#747e90;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	margin-left:392px;
	margin-top:20px;
`;

const Mac = styled.a`
  display:inline-block;
  height:40px;
	width:182px;
	position:absolute;
	background-color:#000;
	border-radius: 6px;
	margin-left:300px;
	margin-top:68px;
	text-align:center;
	line-height:40px;
	transition:0.2s;
	&:hover {
    background-color:#333;
  }
`;

const MacLogo= styled.div`
  height:20px;
	width:20px;
	background:url(../../public/mega/mac.png) no-repeat;
	display:inline-block;
	vertical-align:middle;
	margin-right:10px;
`;

const Window= styled.a`
  display:inline-block;
  height:40px;
	width:182px;
	position:absolute;
	background-color:#4d63ff;
	border-radius: 6px;
	margin-left:526px;
	margin-top:68px;
	transition:0.2s;
	text-align:center;
	line-height:40px;
	&:hover {
	background-color:#384ddd;
}
`;


const WindowLogo= styled.div`
  height:15px;
	width:15px;
	background:url(../../public/mega/windows.png) no-repeat;
	display:inline-block;
	vertical-align:middle;
	margin-right:10px;
`;

const Span= styled.span`
  font-size:14px;
	color:#fff;
	font-family: Gotham, Helvetica Neue, Helvetica, Arial," sans-serif";
	text-align: center;
	vertical-align:middle;
`;

const Foot= styled.div`
 height:170px;
	width:1000px;
	background:url(../../public/mega/2.png) no-repeat;
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
            <Headers />
            <Wrapper>
              {/*<Header>*/}
                {/*<Logo/>*/}
              {/*</Header>*/}
              <Main>
                <Tittle1>欢迎使用Lugia-mega组建库</Tittle1>
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
              <Foot />
            </Wrapper>
          </Col>
          <Col span={5} xl={{ span: 4 }}  xxl={{ span: 5 }}>
            <Block > </Block>
          </Col>
        </Row>
      </React.Fragment>
    );
  }


}
