import React from 'react';
import styled from 'styled-components';
import notFound from '../../public/404.png';
import {go} from '@lugia/lugiax-router';

const Container = styled.div`
  display:flex;
  padding-top:152px;
  justify-content:center;
  align-items:center;
`;

const TextBox = styled.div`
  
`;

const Title = styled.div`
  font-size:60px;
  color:#4d63ff;
  font-weight:600;
  line-height:1.0;
`;

const Sorry = styled.div`
  font-size:16px;
  color:#666666;
  line-height:1.0;
  margin:22px 0 30px;
`;

const Button = styled.div`
  width:124px;
  height:40px;
  text-align:center;
  line-height:40px;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  font-size:18px;
  background:#4d63ff;
  color:#ffffff;
  &:hover{
    box-shadow: 0 0 7px rgba(77,99,255,0.4);
  }
  
`;

const Image = styled.img`
  width:492px;
  margin-left:94px;
`;

export default class Pages extends React.Component<any, any> {

  render(){
    return (
      <Container>
        <TextBox onClick={e => this.linkToUrl('/home')}>
          <Title>404</Title>
          <Sorry>抱歉，您访问的页面不存在</Sorry>
          <Button>返回首页</Button>
        </TextBox>
        <Image src={notFound}/>
      </Container>
    );

  }

  linkToUrl = (target:string) => {
    target && go({ url:target });
  };

}
