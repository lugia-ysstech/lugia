/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';

const { themeColor } = colorsFunc();

const Title = styled.div.attrs({
    size:props => (props.level?'22px':'18px')
})` 
  font-size:${props => props.size};
  color:#0f1333;
  line-height:1;
  font-weight:500;
  margin:30px 0 20px;
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
`;

const Content = styled.div` 
  color:#36384d;
  font-size:14px;
  line-height:1.5;
`;
const ContentContainer = styled.div` 
  
`;

const FlexContainer = styled.div` 
 display:flex;
`;


const ImageContainer = styled.div`  
 text-align:center;
`;

const Image = styled.img.attrs({
  width:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'550px':'340px'),
  margin:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'20px 0':'0 50px'),
})` 
  margin:${props => props.margin};
  max-width:${props => props.width};
 
`;

const ImageDesc = styled.div.attrs({
  padding:props => (props.imgPosition === 'right' || props.imgPosition === 'left' ?'10px 50px 0 0':''),
  align:props => (props.imgPosition === 'top' || props.imgPosition === 'bottom'?'center':'right')
})` 
  color:#666;
  font-size:12px;
  line-height:1;
  text-align:${props => props.align};
  margin:${props => props.imgPosition}
  padding:${props => props.padding};
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

const getContentElement = (data:Object,titleElement) => {
  return  <ContentContainer>
    {titleElement}
    {data.map(item => {
      return <React.Fragment>
        <Content>{item}</Content>
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
        const titleElement = <Title level={level}> {level?'':<Titleline/>} {item.title} <Desc>{item.desc}</Desc> </Title>;
        const {imgPosition} = item;
        switch (imgPosition) {
          case 'left':
            childElement =
              <FlexContainer>
                {getImgElement(item.img,imgPosition)}
                {getContentElement(item.content,titleElement)}
              </FlexContainer>;
            break;
          case 'right':
            childElement =
              <FlexContainer>
                {getContentElement(item.content,titleElement)}
                {getImgElement(item.img,imgPosition)}
              </FlexContainer>;
            break;
          case 'bottom':
            childElement =
              <React.Fragment>
                {getContentElement(item.content,titleElement)}
                {getImgElement(item.img,imgPosition)}
              </React.Fragment>;
            break;
          default:
            childElement =
              <React.Fragment>
                {getImgElement(item.img,imgPosition)}
                {getContentElement(item.content,titleElement)}
              </React.Fragment>;
        }
        return <React.Fragment>
          {childElement}
        </React.Fragment>;
      })
    }

  </React.Fragment>;
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
    const  OutSideElement = getElementWithPosition([{title,content,imgPosition,img,desc}],true);
    return <React.Fragment>
      {OutSideElement}
      {element}
    </React.Fragment>;

  }
}
