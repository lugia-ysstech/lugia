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
    const hAvatar = {
      [Widget.Avatar]: {
        width: 80,
        height: 80
      },
      [Widget.Card]: {
        width: 200,
        height: 230
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
        <div style={{ display: 'inline-flex' }}>
          <CardWrapper>
            <Theme config={hAvatar}>
              <Wrapper>
                <Card
                  type={'avatar'}
                  title={'This is title'}
                  description={'This is description'}
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
            <Theme config={cardImage}>
              <Card
                viewClass={'cardImage'}
                type={'image'}
                imageOrientation={'vertical'}
                title={'This is title'}
                description={'This is description'}
                image={
                  'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/2eac1a340185301d24d6fac426aebd9abe6dea0e/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/18081548404150_.pic_hd.jpg'
                }
                shadow={'hover'}
              />
            </Theme>
          </CardWrapper>
        </div>
        <br />
        <div style={{ display: 'inline-flex' }}>
          <CardWrapper>
            <Theme config={avatar}>
              <Wrapper>
                <Card
                  type={'avatar'}
                  title={'This is title'}
                  description={'This is description'}
                  avatar={
                    'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/4d4bd6db04b1c6015acf4c933607956a9f2d62a1/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/Bitmap2.png'
                  }
                  shadow={'hover'}
                />
              </Wrapper>
            </Theme>
          </CardWrapper>
          <CardWrapper>
            <Wrapper>
              <Card
                type={'image'}
                title={'This is title'}
                imageOrientation={'horizontal'}
                description={'This is description'}
                image={
                  'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/2eac1a340185301d24d6fac426aebd9abe6dea0e/lugiaweb%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87/18081548404150_.pic_hd.jpg'
                }
                shadow={'hover'}
              />
            </Wrapper>
          </CardWrapper>
        </div>
      </Wrapper>
    );
  }
}
