import React from 'react';
import { Card, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';

const Wrapper = styled.div`
  margin-top: 50px;
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
        <Theme config={view}>
          <Card
            title={<div>{'this is title'}</div>}
            description={[
              <div>{'this is description'}</div>,
              <div>{'this is description'}</div>,
              <div>{'this is description'}</div>,
              <div>{'this is description'}</div>
            ]}
            shadow={'always'}
          />
        </Theme>
        <CardWrapper>
          <Theme config={avatar}>
            <Wrapper>
              <Card
                type={'avatar'}
                title={'this is title'}
                description={'this is description'}
                avatar={
                  'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7878a9471d38534398c28f73f27adb1b/738b4710b912c8fc8e9cace6f1039245d68821a9.jpg'
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
                imageOrientation={'vertical'}
                avatar={
                  'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7878a9471d38534398c28f73f27adb1b/738b4710b912c8fc8e9cace6f1039245d68821a9.jpg'
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
              title={'this is title'}
              imageOrientation={'horizontal'}
              description={'this is description'}
              image={
                'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4f88e0c6b3de9c82b268f1dd0de8eb6f/f9198618367adab4973d1fbc8bd4b31c8601e464.jpg'
              }
              shadow={'hover'}
            />
          </Wrapper>
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
                'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4f88e0c6b3de9c82b268f1dd0de8eb6f/f9198618367adab4973d1fbc8bd4b31c8601e464.jpg'
              }
              shadow={'hover'}
            />
          </Theme>
        </CardWrapper>
      </Wrapper>
    );
  }
}
