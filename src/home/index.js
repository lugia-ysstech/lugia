/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert , Theme,Grid,Input ,Icon} from '@lugia/lugia-web';
import styled , { keyframes } from 'styled-components';
import {go} from '@lugia/lugiax-router';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
import Widget from '@lugia/lugia-web/dist/consts/index';
import Footer from '../footer';
import Search from '../search';

import logo from '../../public/lugia-logo.png';
import pic1 from '../../public/home/pic1.png';
import pic2 from '../../public/home/pic2.png';
import pic3 from '../../public/home/pic3.png';
import pic4 from '../../public/home/pic4.png';
import pic5 from '../../public/home/pic5.png';
import sense from '../../public/home/sense.png';
import design from '../../public/home/design.png';
import view from '../../public/home/view.png';

const { themeColor } = colorsFunc();

const { Row, Col } = Grid;


const Wrapper = styled.div`
  width:100%;
  min-height:20px;
`;

const Head = styled.div`
  height:60px;
  line-height:60px;
`;

const HeadRight = styled.div`
  float:right;
  display:flex;
  align-items:center;
  margin-left
`;

const Logo = styled.img`
  margin:10px 12px 0 -60px;
  height:60%;
  float:left;
`;

const Language = styled.span`
  margin:0 10px 0 0;
  color:#999;
  
`;

const ThemeColor = styled.span`
  background:${themeColor};
  width:16px;
  height:16px;
  border-radius:5px;
  
`;


const BgImg1 = styled.div`
  background:url("${pic1}") no-repeat;
  position:absolute;
  width:55%;
  height:2000px;
  right:0;
  top:92px;
  z-index:-1;
 
`;


const BgImg2 = styled.div`
  background:url("${pic2}") no-repeat 100%;
  background-position: right;
  position:absolute;
  width:20%;
  height:800px;
  left:0;
  top:448px;
  z-index:-1;
`;

const BgImg3 = styled.img`
  width:600px;
  position:absolute;
  right:55%;
  top:220px;
  z-index:3;
  
`;

const BgImg4 = styled.img`
  position: absolute;
  right: 50%;
  top: 395px;
  z-index: 6;
  
`;


const BgImg5 = styled.div`
  background:url("${pic5}") no-repeat center top;
  position: absolute;
  width: 100%;
  height:600px;
  left: 0;
  bottom: 0;
  z-index: 2;
`;

const MiddleWrapper = styled.div`
  width:100%;
 
`;



const ModelOne = styled.div`
  width:500px;
  padding:180px 0 0 48px;
  margin:0 30px;
`;


const H1 = styled.div`
  font-size: 60px;
  color: #ff5b00;
  font-family: 'Helvetica Neue';
  font-weight:800;
 
}
`;

const H2 = styled.div`
  font-size: 30px;
  color: ${props => (props.color || '#000033')};
  font-family: 'Helvetica Neue';
  font-weight:800;
  margin: ${props => (props.margin || '20px 0')};
`;

const Text = styled.div`
  font-size: 14px;
  color:${props => (props.color || '#36384d')};
  line-height:1.5;
  margin: 0 0 30px;
  text-align:left;
  letter-spacing:1px;
`;

const ButtonContainer = styled.div`
  width:266px;
  display:flex;
  justify-content: space-between;
`;

const Button = styled.div.attrs({
  bgcolor:props => (props.active?'#4d63ff':'transparent'),
  color:props => (props.active?'#fff':'#000033'),
  border:props => (props.active?'1px solid transparent':'1px solid #000033'),
})`
  width:122px;
  height:40px;
  text-align:center;
  line-height:38px;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  font-size:18px;
  background:${props => props.bgcolor};
  color:${props => props.color};
  border:${props => props.border};
  &:hover{
    color:${props => (props.active?'#fff':'#4d63ff')};
    border: 1px solid #4d63ff;
    box-shadow: 0 0 7px rgba(77,99,255,0.4);
  }
  &:active{
    color:${props => (props.active?'#fff':'#3d4ecc')};
    border: 1px solid #3d4ecc;
    background:${props => (props.active?'#3d4ecc':'transparent')} ;
  }
`;

const ModelTwo = styled.div`
  width:100%;
  margin:388px 0 0;
  position:relative;

`;


const slideToRight = keyframes`
  0% {
    transform:scaleX(0);
  }
  100% {
    opacity:1;
   transform:scaleX(1);
  }
`;

const Design = styled.div`
  font-size: 30px;
  color: #000033;
  transform-origin:0;
  padding:0 0 0 50px;
  opacity:0;
  animation: ${slideToRight} 1s 1s cubic-bezier(.57,.12,.35,.59) forwards;
`;

const slideDown = keyframes`
  0% {
    height:0;
  }
  100% {
    height:44px;
  }
`;

const Square = styled.div`
  position:absolute;
  left:10px;
  top:-4px;
  width:22px;
  background:#4d63ff;
  border-radius:22px;
  animation: ${slideDown} .3s 1s cubic-bezier(.57,.12,.35,.59) forwards;
`;

const spendLine = keyframes`
  0% {
    height:0px;
  }
  100% {
    height:1100px;
  }
`;

const Line = styled.div`
  position:absolute;
  left:20px;
  width:1px;
  background:#e8e8e8;
  animation: ${spendLine} 1s ease forwards;
`;

const LineRow = styled.div`
  width:100%;
  height:2px;
  border-bottom:1px solid #e8e8e8;
  position:absolute;
  top:55%;
  opacity:0;
  animation: ${slideToRight} 1s 1s cubic-bezier(.57,.12,.35,.59) forwards;
`;

const LineRight = styled.div`
  position:absolute;
  right:5%;
  width:1px;
  background:#e8e8e8;
  animation: ${spendLine} 1s ease forwards;
`;


const DesignCardBox = styled.div`
 width:100%;
 margin-top:42px ;
 display: flex;
 justify-content:space-between;
 position:relative;
`;

const DesignCard = styled.div`
  width: 270px;
  border-radius: 10px;
  background: #fff;
  padding: 42px 64px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-shadow: 0 0 40px rgba(77,99,255,0.2);
  opacity:0;
  animation: ${slideToRight} 1s 1s cubic-bezier(.57,.12,.35,.59) forwards;
`;


const CardImg = styled.img`
  width: 100%;
`;

const CardTitle = styled.div`
  font-size: 24px;
  color: #000033;
  margin: 26px 0 20px;
  text-align: center;
`;

const ModelThird = styled.div`
  width:95%;
  padding:226px 60px 0 50% ;
  margin:0 30px ;
  position:relative;
  min-height:800px;
  position:relative;
 
`;

const TextBox = styled.div`
  width:100%;
  text-align:right;
  float:right;
`;

const SquareRight = styled.div`
  position:absolute;
  right:20px;
  top:222px;
  width:22px;
  background:#4d63ff;
  border-radius:22px;
  animation: ${slideDown} .3s 1s cubic-bezier(.57,.12,.35,.59) forwards;
`;

const SolutionCard = styled.div`
  width:430px;
  height:220px;
  border-radius:10px;
  background:#4d63ff;
  text-align:center;
  padding: 15px 30px;
  position:absolute;
  right:60%;
  top:260px;
  z-index:5;
  display:flex;
  flex-direction:column;
  align-items:center;
  box-shadow: 0 0 60px rgba(77,99,255,0.4);
  
`;

const ButtonCard = styled.div`
  width:140px;
  height:40px;
  text-align:center;
  line-height:40px;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  background: #fff;
  color: #4d63ff;
  font-size:18px;
  position:absolute;
  bottom:-20px;
  &:hover{
    background: #faf9fe;
  }
  &:active{
    color: #3d4ecc;
  }
`;


const SearchBox = styled.div`
 float:left;
`;

export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: any, stateProps: any) {

    if (!stateProps) {
      return {

      };
    }
    return {
      current: 'current' in defProps ? defProps.value : stateProps.current,
    };
  }

  render() {

    return (
      <React.Fragment>
        <Row>
          <Col span={5} >
            <Wrapper> </Wrapper>
          </Col>
          <Col span={14} >
            <MiddleWrapper>
              <Line />
              <Head>
                <Logo src={logo} alt=""/>
                <SearchBox><Search/></SearchBox>
                <HeadRight>
                  <Language>English</Language>
                  <Language>|</Language>
                  <ThemeColor/>
                </HeadRight>

              </Head>
              <ModelOne>
                <H1>LUGIA DESIGN</H1>
                <H2>BE BORN FOR FINANCE</H2>
                <Text>Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，为前端开发人员赋能，让用户体验 知性。</Text>
                <ButtonContainer>
                  <Button active onClick={e => this.linkToUrl('/component/affix')}>开始使用</Button>
                  <Button onClick={e => this.linkToUrl('/design/introduce')}>设计指南</Button>
                </ButtonContainer>
              </ModelOne>
              <ModelTwo>
                <Square />
                <Design>设计指南</Design>
                <LineRow/>
                <DesignCardBox>
                  <DesignCard>
                    <CardImg src={sense} />
                    <CardTitle>设计价值观</CardTitle>
                    <Button active onClick={e => this.linkToUrl('/design/core')}>开始使用</Button>
                  </DesignCard>
                  <DesignCard>
                    <CardImg src={design} />
                    <CardTitle>设计原则</CardTitle>
                    <Button active  onClick={e => this.linkToUrl('/design/alignment')}>开始使用</Button>
                  </DesignCard>
                  <DesignCard>
                    <CardImg src={view} />
                    <CardTitle>视觉原则</CardTitle>
                    <Button active  onClick={e => this.linkToUrl('/design/layout')}>开始使用</Button>
                  </DesignCard>
                </DesignCardBox>
                <LineRight/>
              </ModelTwo>
              <ModelThird>
                <BgImg3 src={pic3} />
                <BgImg4 src={pic4} />

                <TextBox>
                  <SquareRight/>
                  <SolutionCard>
                    <H2 color="#fff">Lugia Design</H2>
                    <Text color="#fff">大道至简的设计规范。对于设计来说，知性 可以同时定义为 “ 形式上的优美和极致 ” 和 “ 科学上的精确和简洁 ”，我们相信知性的设计，实现了二者的完美契合。</Text>
                    <ButtonCard onClick={e => this.linkToUrl('/design/introduce')}>开始使用</ButtonCard>
                  </SolutionCard>
                  <Design>解决方案</Design>
                  <H2 margin={'36px 0 20px'}>LugiaX</H2>
                  <Text>一个基于 Redux 的前端状态管理工具。提供简单高效的全局状态管理方案、 基于 async/await 的异步操作、快捷的双向绑定。LugiaX 内置路由库，对 react-router 做了轻量封装，使用起来更加简单明了。</Text>
                  <H2>Lugia Web</H2>
                  <Text>一套基于 Lugia Design 的高品质 React 组件库，满足金融行业高性能组件的需求，适用于 Web 端。</Text>
                  <H2 >Lugia Mega</H2>
                  <Text >标准、高效、开箱即用的前端可视化开发工具。Lugia Mega 是一个无需环境搭建、快速上手的跨平台桌面应用（Mac 和 Windows）。为开发人员提供可视化、屏蔽底层、元信息式的开发方式。帮助设计师、产品经理快速设计原型，成果可以直接让开发人员使用。Lugia Mega 贯穿了整个项目的生命周期，让您极速构建前端应用、轻松管理所有项目。</Text>

                </TextBox>

              </ModelThird>
              <Footer/>
            </MiddleWrapper>
          </Col>
          <Col span={5} >
            <Wrapper > </Wrapper>
          </Col>
        </Row>
        <BgImg1 />
        <BgImg2 />
        <BgImg5 />

      </React.Fragment>
    );
  }

  linkToUrl = (target:string) => {

    target && go({ url:target });

  };


}
