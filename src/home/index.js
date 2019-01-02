/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert , Theme,Grid } from '@lugia/lugia-web';
import styled , { keyframes } from 'styled-components';

const { Row, Col } = Grid;
const Wrapper = styled.div`
  width:100%;
  min-height:20px;
`;

const BgImg1 = styled.div`
  background:url("../../public/home/pic1.png") no-repeat;
  position:absolute;
  width:55%;
  height:2000px;
  right:0;
  top:92px;
  z-index:-1;
 
`;

const BgImg2 = styled.div`
  background:url("../../public/home/pic2.png") no-repeat 100%;
  background-position: right;
  position:absolute;
  width:20%;
  height:800px;
  left:0;
  top:448px;
  z-index:-1;
`;

const BgImg3 = styled.img`
  position:absolute;
  left:-180px;
  top:220px;
  z-index:1;
  
`;

const BgImg4 = styled.img`
  position:absolute;
  left:355px;
  top:428px;
  z-index:2;
  
`;

const BgImg5 = styled.div`
  background:url("../../public/home/pic5.png") no-repeat center top;
  position: absolute;
  width: 100%;
  height:600px;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const MiddleWrapper = styled.div`
  width:100%;
  padding-bottom:500px;
`;

const Head = styled.div`
  height:60px;
`;


const ModelOne = styled.div`
  width:50%;
  padding:180px 0 0 48px;
  margin:0 30px;
`;


const H1 = styled.div`
  font-size: 60px;
  color: #ff5b00;
  font-family: 'Helvetica Neue';
  font-weight:800;
`;

const H2 = styled.div`
  font-size: 30px;
  color: ${props => (props.color || '#000033')};
  font-family: 'Helvetica Neue';
  font-weight:800;
  margin: 20px 0;
`;

const Text = styled.div`
  font-size: 14px;
  color:${props => (props.color || '#666')};
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
  line-height:40px;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
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
  padding:388px 0 0;
  margin:0 30px ;
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
  padding:0 0 0 20px;
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
  left:-20px;
  top:382px;
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
    height:880px;
  }
`;

const Line = styled.div`
  position:absolute;
  left:20px;
  width:1px;
  background:#e8e8e8;
  animation: ${spendLine} 1s ease forwards;
`;

const DesignCardBox = styled.div`
  margin-top:42px ;
  margin-left:-40px;
  overflow:hidden;
 padding-bottom:20px;
`;

const DesignCard = styled.div`
  width: 288px;
  border-radius: 10px;
  background: #fff;
  padding: 42px 64px;
  margin-right:106px;
  float:left;
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
  width:80%;
  padding:226px 60px 0 46% ;
  margin:0 30px ;
  position:relative;
  min-height:800px;
  position:relative;
 
`;

const TextBox = styled.div`
  // width:50%;
  text-align:right;
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
  left:20px;
  top:285px;
  z-index:1;
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
  &:hover{
    background: #faf9fe;
  }
  &:active{
    color: #3d4ecc;
  }
`;

export default class Pages extends React.Component<any, any> {
  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const defCurrent = defProps.current || null;
    if (!stateProps) {
      return {
        current:defCurrent,
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
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
              <Head> </Head>
              <ModelOne>
                <H1>LUGIA DESIGN</H1>
                <H2>BE BORN FOR FINANCE</H2>
                <Text>Lugia的诞生就是要树立金融行业组件化的标杆。我们不仅仅创造了一套属于金融行业的开源组件设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。</Text>
                <ButtonContainer>
                  <Button active>开始使用</Button>
                  <Button>设计指南</Button>
                </ButtonContainer>
              </ModelOne>
              <ModelTwo>
                <Square />
                <Design>设计指南</Design>
                <DesignCardBox>
                  <DesignCard>
                    <CardImg src="../../public/home/sense.png" />
                    <CardTitle>设计价值观</CardTitle>
                    <Button active>开始使用</Button>
                  </DesignCard>
                  <DesignCard>
                    <CardImg src="../../public/home/design.png" />
                    <CardTitle>设计原则</CardTitle>
                    <Button active>开始使用</Button>
                  </DesignCard>
                  <DesignCard>
                    <CardImg src="../../public/home/view.png" />
                    <CardTitle>视觉原则</CardTitle>
                    <Button active>开始使用</Button>
                  </DesignCard>
                </DesignCardBox>
              </ModelTwo>
              <ModelThird>
                <BgImg3 src="../../public/home/pic3.png" />
                <BgImg4 src="../../public/home/pic4.png" />
                <TextBox>
                  <SquareRight/>
                  <SolutionCard>
                    <H2 color="#fff">BE BORN FOR FINANCE</H2>
                    <Text color="#fff">Lugia的诞生就是要树立金融行业组件化的标杆。我们不仅仅创造了一套属于金融行业的开源组件设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。</Text>
                    <ButtonCard>开始使用</ButtonCard>
                  </SolutionCard>
                  <Design>解决方案</Design>
                  <H2>BORN FOR FINANCE</H2>
                  <Text>Lugia的诞生就是要树立金融行业组件化的标杆。我们不仅仅创造了一套属于金融行业的开源组件设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。</Text>
                  <H2>FOR FINANCE</H2>
                  <Text>Lugia的诞生就是要树立金融行业组件化的标杆。我们不仅仅创造了一套属于金融行业的开源组件设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。</Text>
                  <H2>BE BORN</H2>
                  <Text>Lugia的诞生就是要树立金融行业组件化的标杆。我们不仅仅创造了一套属于金融行业的开源组件设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范。</Text>


                </TextBox>

              </ModelThird>
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
}
