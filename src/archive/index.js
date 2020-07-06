/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Grid } from '@lugia/lugia-web';
import styled from 'styled-components';
import Headers from '../nav';

import banner from './img/banner.jpg';
import qa from './img/qa.jpg';
import use from './img/use.jpg';
import development from './img/development.jpg';

const {Row, Col} = Grid;


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: url("${banner}") no-repeat;
  background-size: 100% 499px;
`
const FileContainer = styled.div`
  width: 100%;
  height: 196px;
  margin: 0 auto 100px;
`
const QaContainer = styled.div`
  width: 100%;
  height: 278px;
  margin: 40px auto 50px;
  background:url("${qa}") no-repeat;
  background-size: cover;
  padding: 41px 80px;
`;

const Head = styled.div`
  width:100%;
  height:499px;
`

const BgImg2 = styled.div`
  background:url("${props => props.img}") no-repeat;
  width:90%;
  height:196px;
  background-size:cover;
  float: ${props => props.position ? props.position : 'left'};
  padding-left: 80px;
`;



const Text = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #747E90;
  line-height: 30px;
  text-align: left;
`;

const H1 = styled.div`
   font-family: HYQiHei-HES;
   font-size: ${props => props.fontSize ? props.fontSize : '30px'};
   color: #50575D;
   margin-bottom: 8px;
   margin-top: ${props => props.marginTop ? props.marginTop : '31px'};
`
const LineContainer = styled.div`
   width: 100%;
   display: flex;
   align-item: center;
   justify-content: center;
`
const Line = styled.div`
  width: 1px;
  height: 196px;
  background: #E8E8E8;
`
const LinkText = styled.a`
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #4D63FF;
  margin: ${props => props.top ? props.top : '8px'} 0px;
  line-height: 20px;
  display: block;
`
const Container = styled.div`
   display: flex;
   align-items: center;
   height: 196px;
`
const Block = styled.div`
  width: 100%;
  min-height: 20px;
`;
export default class Pages extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Row>
            <Col span={5} xl={{ span: 1 }} xxl={{ span: 3 }}>
              <Block> </Block>
            </Col>
            <Col span={14} xl={{ span: 22 }} xxl={{ span: 18 }}>
              <Head>
                <Headers/>
              </Head>
              <QaContainer>
                <Row>
                  <Col span={10}>
                    <H1>QA</H1>
                    <Text>这是 Lugia生态体系的问题解答，它针对于常见的开发问题
                      给出相应的解决方案，它基于使用者开发过程中高频出现的
                      技术问题，给予相关的问题解答。</Text>
                  </Col>
                  <Col span={4}>
                    <LineContainer><Line/></LineContainer>
                  </Col>
                  <Col span={10}>
                    <Row>
                      <Col span={12}>
                        <Container>
                          <Wrapper>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/18AlXKVyl2IgFxAB'} target={'_blank'}>QA@lugia-admin</LinkText>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/DJAz4VLlODUMFeqy'} target={'_blank'}>QA@Mega-CLI</LinkText>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/r4ArzBLVv2FYFgAV'} target={'_blank'}>QA@lugia-web</LinkText>
                          </Wrapper>
                        </Container>
                      </Col>
                      <Col span={12}>
                        <Container>
                          <Wrapper>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/lnq8MmKL9Ot6F4kw'} target={'_blank'}>QA@lugiax</LinkText>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/XRkgJ21rQmIrFbqM'} target={'_blank'}>QA@lugia-Mega-IDE</LinkText>
                            <LinkText top={'15px'} href={'https://shimo.im/docs/VOAWVa7rb0f8FYkZ'} target={'_blank'}>QA@lugia-theme</LinkText>
                          </Wrapper>
                        </Container>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </QaContainer>
              <FileContainer>
                <Row>
                  <Col span={12}>
                    <BgImg2 img={use}>
                      <Row>
                        <Col span={12}>
                          <H1 fontSize={'22px'} marginTop={'69px'}>使用手册</H1>
                          <Text>常见问题解答记录</Text>
                        </Col>
                        <Col span={12}>
                          <Container>
                            <Wrapper>
                              <LinkText href={'https://shimo.im/docs/VOAWVa7rRNf8FYkZ'} target={'_blank'}>Mega-IDE用户手册</LinkText>
                              <LinkText href={'https://shimo.im/docs/8Okv9RDlgYTPF6qj'} target={'_blank'}>Mega-CLI使用手册</LinkText>
                            </Wrapper>
                          </Container>
                        </Col>
                      </Row>
                    </BgImg2>
                  </Col>
                  <Col span={12}>
                    <BgImg2 img={development} position={'right'}>
                      <Row>
                        <Col span={12}>
                          <H1 fontSize={'22px'} marginTop={'69px'}>开发手册</H1>
                          <Text>详细介绍和API说明</Text>
                        </Col>
                        <Col span={12}>
                          <Container>
                            <Wrapper>
                              <LinkText href={'https://shimo.im/docs/bn3j8rlpvdSwFEk2'} target={'_blank'}>Lugia体系-组件开发手册</LinkText>
                              <LinkText href={'https://shimo.im/docs/293DVZPvKnHLFRk4'} target={'_blank'}>Lugiax开发手册</LinkText>
                              <LinkText href={'https://shimo.im/docs/5zAZVl8Jaot5FgAo'} target={'_blank'}>Lugia-web开发手册</LinkText>
                              <LinkText href={'https://shimo.im/docs/Ne3NVmwRBrsOF93O'} target={'_blank'}>Lugia-theme开发手册</LinkText>
                            </Wrapper>
                          </Container>
                        </Col>
                      </Row>
                    </BgImg2>
                  </Col>
                </Row>
              </FileContainer>
            </Col>
            <Col span={5} xl={{ span: 1 }} xxl={{ span: 3 }}>
              <Block> </Block>
            </Col>
          </Row>
        </Wrapper>
      </React.Fragment>
    );
  }
}
