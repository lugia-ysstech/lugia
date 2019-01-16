/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Anchor, Icon, Theme } from '@lugia/lugia-web';
import { go } from '@lugia/lugiax-router';
import styled from 'styled-components';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
import Highlight from 'react-highlight';
import FooterNav from '../../footer-nav';

const { themeColor } = colorsFunc();
const { Link } = Anchor;

const Title = styled.div.attrs({
  size:props => (props.level?'24px':'18px'),
  margin:props => (props.level?props.imgPosition?'0 0 26px':'0 0 26px ':'0 0 20px'),
  padding:props => (props.level?'0':'0 0 0 50px'),
  background:props => (props.level?'transparent':themeColor),
})` 
  font-size:${props => props.size};
  color:#0f1333;
  line-height:1;
  font-weight:600;
  // padding:${props => props.padding};
  margin:${props => props.margin};
  &:before {
    display:${props => (props.level?'none':'inline-block')} ;
    content: ' ';
    width: 4px;
    height: 18px;
    background: ${themeColor};
    border-radius: 2px;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

const Desc = styled.span`
  color:#92939e;
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
  background:${props => (props.bash?'#f8f8f8':'transparent')};
  padding:${props => (props.bash?'8px 16px':props.level?'0':'0 50px 0 0')};
  border-radius:${props => (props.bash?'4px':'0')};
`;

const ContentBox = styled.div` 
   padding:0  50px 0 0;
   width:85%;
`;

const ContentContainer = styled.div` 
   // padding:${props => (props.level ?'0 0 0 20px':'0  50px')};
`;

const FlexContainer = styled.div` 
  display:flex;
  margin-bottom:30px;
  justify-content:space-between;
`;

const ImageContainer = styled.div`  
 text-align:center;
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
  color:#525466;
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
  box-shadow: 0 0 6px rgba(77,99,255,0.2);
 cursor:pointer;
 
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

const PantoneContainer = styled.div`
  height:136px;
  background:#edf0fe;
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin:30px 0;
`;

const PantoneIcon = styled(Icon)`
  margin:0 10px;
  font-size:22px;
  color:#fff;
  border-radius:50%;
  box-shadow:0 0 6px rgba(77,99,255,0.2);
`;

const PantoneBox = styled.div`
  width: calc(100% - 80px);
  height:100%;
  overflow:hidden;
`;

const PantoneCardBox = styled.div.attrs({
  width:props => (props.width+'px' || '10000px'),
  left:props => (-(props.left * 146 +10) +'px')
})`
  width: ${props => props.width};
  height:100%;
  transform:translateX(${props => props.left});
  transition: all 0.3s linear;
  
`;

const PantoneCard = styled.div`
  width:146px;
  margin:15px 10px 0;
  display:inline-block;
  cursor:pointer;
  padding:10px;
  background:#fff;
  border-radius:4px;
  vertical-align:top;
  &:hover{
    box-shadow:0 0 16px rgba(77,99,255,0.2);
  }
`;

const PantoneCardText = styled.div`
  display:none;
  color:#333333;
  margin-bottom:5px;
   ${PantoneCard}:hover & {
    display: block;
  }

`;

const PantoneInnerImage = styled.img` 
  max-width:${props => props.width};
  width:100%;
  border-radius:4px;
  box-shadow:0 0 6px rgba(77,99,255,0.1);
`;


type defProps ={
  dataSource?:Object,
};

type stateProps={
  current:number,
  index:number,
};

const getImgElement = (data:Object,imgPosition:string,level?:Boolean) => {
  if(!data) return;
  return <React.Fragment>
      {data.map(item => {
        return <ImageContainer level={level} imgPosition={imgPosition}>
          <Image imgPosition={imgPosition} src={item.url}  level={level} />
          <ImageDesc imgPosition={imgPosition}>{item.desc}</ImageDesc>
        </ImageContainer>;
      })}
    </React.Fragment>;

};

const getContentElement = (data:Object,titleElement,imgPosition:string,level?:Boolean) => {
  if(!data) return;
  return  <ContentContainer level={level} imgPosition={imgPosition}>
    {level && titleElement}
    {data.map(item => {
      const {text,size,color,margin,weight,url,bash,javascript} = item;
      return <React.Fragment>
        <Content size={size} color={color} bash={bash} margin={margin} weight={weight} level={level}>
          {javascript?<Highlight className="language-jsx">
            {text}
          </Highlight>:text}
          </Content>
        {url && <InnerImage  src={url}  />}
      </React.Fragment>;
    })}
  </ContentContainer>;
};




const getAnchorElement = (data:Object) => {
  return <AnchorContainer>
    <Anchor slideType="line">
      {data.map((item,index) => {
        const {title} = item;
        return <React.Fragment>
            {title &&<Link title={title} href={'#link-'+index} />}
        </React.Fragment>;
      })}
    </Anchor>
  </AnchorContainer>;
};


export default class Template extends React.Component<defProps, stateProps> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    if (!stateProps) {
      return {
        current:0,
        index:0
      };
    }
    return {

    };
  }

  render() {
    return (
      <React.Fragment>
        {this.getElement()}
      </React.Fragment>
    );
  }
  getElement =() => {
    const {dataSource:{children},dataSource,prev,next} = this.props;
    const element = this.getElementWithPosition(children);

    const {title,content,imgPosition,img,desc} = dataSource;
    const  outSideElement = this.getElementWithPosition([{title,content,imgPosition,img,desc}],true);

    const anchor = getAnchorElement(children);
    const {colorTheme} = children[0];
    return <React.Fragment>
      <FlexContainer>
        <ContentBox>
          {outSideElement}
          {element}
          {colorTheme && this.getColorThemeElement(colorTheme)}
          <FooterNav prev={prev} next={next} />
        </ContentBox>
        {anchor}
      </FlexContainer>
    </React.Fragment>;

  };

  getColorThemeElement = (data:Object) => {
    if(!data) return;
    const length = data.length;
    const width = 166*length +10;
    const {handleClick,clickToPrevOrNext} = this;
    const {current,index} = this.state;

    return <React.Fragment>
      <InnerImage src={data[current].theme}/>
      <PantoneContainer>
        <PantoneIcon iconClass="lugia-icon-direction_left_circle" onClick={ e => {
          clickToPrevOrNext('prev',length);
        }}/>
        <PantoneBox>
          <PantoneCardBox width={width} left={index}>
            {
              data.map((item,index) => {
                const {pantone,name} = item;
                return <PantoneCard onClick={ e => {
                  handleClick(index);
                }} >
                  <PantoneCardText>{name}</PantoneCardText>
                  <PantoneInnerImage  src={pantone} />
                </PantoneCard>;
              })
            }
          </PantoneCardBox>

        </PantoneBox>

        <PantoneIcon iconClass="lugia-icon-direction_right_circle" onClick={ e => {
          clickToPrevOrNext('next',length);
        }} />
      </PantoneContainer>
    </React.Fragment>;
  };

  getElementWithPosition = (data:Array<Object>,level?:Boolean) => {
    if(!data) return;
    return <React.Fragment>
      {
        data.map((item,index) => {
          let childElement ;
          const {imgPosition,content,img,card,title} = item;
          const titleElement = item.title && <Title id={'link-'+index} name={'link-'+index} imgPosition={imgPosition} level={level}>  {title} <Desc>{item.desc}</Desc> </Title>;
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
            {card && this.getHtmlElement(card)}

          </React.Fragment>;
        })
      }

    </React.Fragment>;
  };

  getHtmlElement = (data:Object) => {
    if(!data) return;
    return  <DesignCardBox >
      {data.map(item => {
        const {text,url,desc,link} = item;
        return <React.Fragment>
          <DesignCard onClick={e => this.cickToLink(link)}>
            {url && <DesignCardImage  src={url}  />}
            <DesignCardText>{text}</DesignCardText>
            <DesignCardDesc>{desc}</DesignCardDesc>

          </DesignCard>
        </React.Fragment>;
      })}
    </DesignCardBox>;
  };

  handleClick = (index:number) => {
    this.setState({
      current:index,
    });
  };

  clickToPrevOrNext = (type:string,length:number) => {
    const {index} = this.state;

    let direction = 1;
    if(type === 'prev'){
      direction = -1;
    }
    const newValue = index + direction;
    if(newValue <0 || newValue >length-1) return;
    this.setState({
      index:newValue,
    });
  };

  cickToLink = (url:string) => {
    url && go({ url });
  }
}
