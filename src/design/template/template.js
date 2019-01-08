/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import {Theme ,Anchor } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';

const { themeColor } = colorsFunc();
const { Link } = Anchor;

const Title = styled.div.attrs({
  size:props => (props.level?'24px':'18px'),
  margin:props => (props.level?'0 0 26px':'0 0 40px'),
  padding:props => (props.level?'0':'0 0 0 50px')
})` 
  font-size:${props => props.size};
  color:#0f1333;
  line-height:1;
  font-weight:600;
  padding:${props => props.padding};
  margin:${props => props.margin};
`;

const Titleline = styled.span` 
  display:inline-block;
  background: ${themeColor};
  border-radius:2px;
  margin-right:8px;
  width:4px;
  height:18px;
  vertical-align:top;
`;


const Desc = styled.span`
  color:#999;
  font-size:18px; 
  line-height:1;
  font-weight:normal;
`;

const Content = styled.div` 
  color:${props => (props.color || '#36384d')};
  font-size:${props => (props.size || '14px')};
  font-weight:${props => (props.weight || 'normal')};
  line-height:1.8;
  margin:${props => (props.margin || '0')};
`;

const ContentBox = styled.div` 
   padding:0  50px 0 0;
   width:85%;
`;

const ContentContainer = styled.div` 
   padding:${props => (props.level ?'0 0 0 20px':'0  50px')};
   // width:${props => (props.level ?'40%':props.imgPosition === 'right' || props.imgPosition === 'left' ?'50%':'100%')};
`;

const FlexContainer = styled.div` 
  display:flex;
  margin-bottom:40px;
  // padding:0 50px 0 0;
  justify-content:space-between;
`;

const ImageContainer = styled.div`  
 text-align:center;
  // width:${props => (props.level ?'553px':'436px')}
 // width:${props => (props.level ?'60%':props.imgPosition === 'right' || props.imgPosition === 'left' ?'436px':'100%')};
 padding:${props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'0 50px':props.level ?'0 50px':'0')};
`;

const Image = styled.img.attrs({
  width:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'100%':props.level ?'510px':'436px'),
  margin:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'20px 0':'0'),
})` 
  margin:${props => props.margin};
  max-width:${props => props.width};
  width:auto;
`;

const InnerImage = styled.img` 
  max-width:${props => props.width};
  width:100%;
`;


const ImageDesc = styled.div.attrs({
  padding:props => (props.imgPosition === 'right' || props.imgPosition === 'left' ?'10px  0':''),
  align:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'center':'right'),
})` 
  color:#666;
  font-size:12px;
  line-height:1;
  text-align:${props => props.align};
  padding:${props => props.padding};
`;

const AnchorContainer = styled.div` 
  width:15%;
`;

const DesignCardBox = styled.div`
 width:100%;
 margin:20px 0 30px;
 display: flex;
 padding: 0 50px;
 justify-content:space-between;
 position:relative;
`;

const DesignCard = styled.div`
  width: 166px;
  border-radius: 4px;
  background: #fff;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-shadow: 0 0 6px rgba(102,102,102,0.2);
 
`;

const DesignCardText = styled.div`
  font-size:16px;
  line-height:1.0;
  color:#36384d;
  margin:20px 0 8px;
`;

const DesignCardDesc = styled.div`
  font-size:12px;
  line-height:1.0;
  color:#999;
`;

const DesignCardImage = styled.img` 
  height:80px;
`;

type defProps ={
  dataSource?:Object,
};

type stateProps={

};

const getImgElement = (data:Object,imgPosition:string,level?:Boolean) => {
  if(!data) return;
  return <FlexContainer>
      {data.map(item => {
        return <ImageContainer level={level} imgPosition={imgPosition}>
          <Image imgPosition={imgPosition} src={item.url}  level={level} />
          <ImageDesc imgPosition={imgPosition}>{item.desc}</ImageDesc>
        </ImageContainer>;
      })}
    </FlexContainer>;

};

const getContentElement = (data:Object,titleElement,imgPosition:string,level?:Boolean) => {
  if(!data) return;
  return  <ContentContainer level={level} imgPosition={imgPosition}>
    {level && titleElement}
    {data.map(item => {
      const {text,size,color,margin,weight,url,desc} = item;
      return <React.Fragment>
        <Content size={size} color={color} margin={margin} weight={weight} >{text}</Content>
        {url && <InnerImage  src={url}  />}
      </React.Fragment>;
    })}
  </ContentContainer>;
};

const getHtmlElement = (data:Object) => {
  if(!data) return;
  return  <DesignCardBox >
    {data.map(item => {
      const {text,url,desc} = item;
      return <React.Fragment>
        <DesignCard >
          {url && <DesignCardImage  src={url}  />}
          <DesignCardText>{text}</DesignCardText>
          <DesignCardDesc>{desc}</DesignCardDesc>

        </DesignCard>
      </React.Fragment>;
    })}
  </DesignCardBox>;
};

const getElementWithPosition = (data:Array<Object>,level?:Boolean) => {
  if(!data) return;
  return <React.Fragment>
    {
      data.map((item,index) => {
        let childElement ;
        const titleElement = item.title && <Title id={'link-'+index} name={'link-'+index} level={level}> {level?'':<Titleline/>} {item.title} <Desc>{item.desc}</Desc> </Title>;
        const {imgPosition,content,img,card} = item;
        switch (imgPosition) {
          case 'left':
            childElement =
              <FlexContainer>
                {getImgElement(img,imgPosition,level)}
                {getContentElement(content,titleElement,imgPosition,level)}
              </FlexContainer>;
            break;
          case 'right':
            childElement =
              <FlexContainer>
                {getContentElement(content,titleElement,imgPosition,level)}
                {getImgElement(img,imgPosition,level)}
              </FlexContainer>;
            break;
          case 'bottom':
            childElement =
              <React.Fragment>
                {getContentElement(content,titleElement,imgPosition,level)}
                {getImgElement(img,imgPosition,level)}
              </React.Fragment>;
            break;
          default:
            childElement =
              <React.Fragment>
                {getImgElement(img,imgPosition,level)}
                {getContentElement(item.content,titleElement,imgPosition,level)}
              </React.Fragment>;
        }
        return <React.Fragment>
          {!level && <ContentBox>{titleElement}</ContentBox> }
          {childElement}
          {getHtmlElement(card)}
        </React.Fragment>;
      })
    }

  </React.Fragment>;
};

const getAnchorElement = (data:Object) => {
  return <AnchorContainer>
    <Anchor slideType="circle">
      {data.map((item,index) => {
        const {title} = item;
        return <React.Fragment>
          <Link title={title} href={'#link-'+index} />
        </React.Fragment>;
      })}
    </Anchor>
  </AnchorContainer>;
};

export default class Template extends React.Component<defProps, stateProps> {
  render() {
    return (
      <React.Fragment>
        {this.getElement()}
      </React.Fragment>
    );
  }
  getElement =() => {
    const {dataSource:{children},dataSource} = this.props;
    const element = getElementWithPosition(children);

    const {title,content,imgPosition,img,desc} = dataSource;
    const  outSideElement = getElementWithPosition([{title,content,imgPosition,img,desc}],true);

    const anchor = getAnchorElement(children);
    return <React.Fragment>
      <FlexContainer>
        <ContentBox>
          {outSideElement}
          {element}
        </ContentBox>
        {anchor}
      </FlexContainer>

    </React.Fragment>;

  }
}
