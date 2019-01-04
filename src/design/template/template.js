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
  margin:props => (props.level?'0 0 26px':'0 0 40px')
})` 
  font-size:${props => props.size};
  color:#0f1333;
  line-height:1;
  font-weight:600;
  // padding:0 0 0 50px;
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


const ContentContainer = styled.div` 
   padding:0 0 0 50px;
`;

const FlexContainer = styled.div` 
  display:flex;
  margin-bottom:40px;
  padding:0 50px 0 0;
  justify-content:space-between;
`;


const ImageContainer = styled.div`  
 text-align:center;
`;

const Image = styled.img.attrs({
  width:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'550px':'436px'),
  margin:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'20px 0':'0 50px'),
})` 
  margin:${props => props.margin};
  max-width:${props => props.width};
 
`;

const ImageDesc = styled.div.attrs({
  padding:props => (props.imgPosition === 'right' || props.imgPosition === 'left' ?'10px 50px 10px 0':''),
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


type defProps ={
  dataSource?:Object,
};

type stateProps={

};

const getImgElement = (data:Object,imgPosition:string) => {
  if(!data) return;
  return <ImageContainer >
    {data.map(item => {
      return <React.Fragment>
        <Image imgPosition={imgPosition} src={item.url} />
        <ImageDesc imgPosition={imgPosition}>{item.desc}</ImageDesc>
      </React.Fragment>;
    })}
  </ImageContainer>;
};

const getContentElement = (data:Object,titleElement,level:boolean) => {
  return  <ContentContainer>
    {level && titleElement}
    {data.map(item => {
      const {text,size,color,margin} = item;
      return <React.Fragment>
        <Content size={size} color={color} margin={margin} >{text}</Content>
      </React.Fragment>;
    })}
  </ContentContainer>;
};

const getElementWithPosition = (data:Array<Object>,level?:Boolean) => {
  if(!data) return;
  return <React.Fragment>
    {
      data.map((item,index) => {
        let childElement ;
        const titleElement = item.title && <Title id={'link-'+index} name={'link-'+index} level={level}> {level?'':<Titleline/>} {item.title} <Desc>{item.desc}</Desc> </Title>;
        const {imgPosition} = item;
        switch (imgPosition) {
          case 'left':
            childElement =
              <FlexContainer>
                {getImgElement(item.img,imgPosition)}
                {getContentElement(item.content,titleElement,level)}
              </FlexContainer>;
            break;
          case 'right':
            childElement =
              <FlexContainer>
                {getContentElement(item.content,titleElement,level)}
                {getImgElement(item.img,imgPosition)}
              </FlexContainer>;
            break;
          case 'bottom':
            childElement =
              <React.Fragment>
                {getContentElement(item.content,titleElement,level)}
                {getImgElement(item.img,imgPosition)}
              </React.Fragment>;
            break;
          default:
            childElement =
              <React.Fragment>
                {getImgElement(item.img,imgPosition)}
                {getContentElement(item.content,titleElement,level)}
              </React.Fragment>;
        }
        return <React.Fragment>
          {!level && <ContentContainer>{titleElement}</ContentContainer> }
          {childElement}
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
        <ContentContainer>
          {outSideElement}
          {element}
        </ContentContainer>
        {anchor}
      </FlexContainer>

    </React.Fragment>;

  }
}
