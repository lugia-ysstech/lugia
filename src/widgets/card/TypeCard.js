import React from 'react';
import { Card, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';

const Wrapper = styled.div`
  display: inline-block;
`;
const CardWrapper = styled.div`
  display: inline-block;
  padding-right: 10px;
  padding-top: 10px;
`;
export default class TypeCard extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Card]: {
        width: 300,
        height: 160
      }
    };
    const avatar = {
      [Widget.Avatar]: {
        width: 80,
        height: 80
      }
    };
    const cardImage = {
      [Widget.CardImage]: {
        width: 200,
        height: 130
      }
    };
    return (
      <Wrapper>
        <CardWrapper>
          <Theme config={avatar}>
            <Wrapper>
              <Card
                type={'avatar'}
                title={'this is title'}
                description={'this is description'}
                imageOrientation={'vertical'}
                avatar={
                  'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/4d4bd6db04b1c6015acf4c933607956a9f2d62a1/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/Bitmap2.png'
                }
                shadow={'hover'}
              />
            </Wrapper>
          </Theme>
        </CardWrapper>
        <CardWrapper>
          <Theme config={avatar}>
            <Wrapper>
              <Card
                type={'avatar'}
                title={'this is title'}
                description={'this is description'}
                avatar={
                  'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/4d4bd6db04b1c6015acf4c933607956a9f2d62a1/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/Bitmap2.png'
                }
                shadow={'hover'}
              />
            </Wrapper>
          </Theme>
        </CardWrapper>
        <CardWrapper>
          <Theme config={cardImage}>
            <Card
              viewClass={'cardImage'}
              type={'image'}
              imageOrientation={'vertical'}
              title={'this is title'}
              description={'this is description'}
              image={
                'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/2eac1a340185301d24d6fac426aebd9abe6dea0e/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/18081548404150_.pic_hd.jpg'
              }
              shadow={'hover'}
            />
          </Theme>
        </CardWrapper>
        <CardWrapper>
          <Wrapper>
            <Card
              type={'image'}
              title={'this is title'}
              imageOrientation={'horizontal'}
              description={'this is description'}
              image={
                'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/2eac1a340185301d24d6fac426aebd9abe6dea0e/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/18081548404150_.pic_hd.jpg'
              }
              shadow={'hover'}
            />
          </Wrapper>
        </CardWrapper>
      </Wrapper>
    );
  }
}
