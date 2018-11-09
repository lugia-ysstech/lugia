/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {Avatar,Theme,Badge} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import Widget from '../consts';
// import Theme from '../theme';
// import Badge from '../badge/index';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
export default () => {
  const view = {
    [Widget.Avatar]: {
      color: 'white',
      backgroundColor: '#cccccc',
      margin: 10,
    },
    [Widget.Badge]: {
      position: { right: 20, top: 10 },
    },
    register: {},
  };
  return (
    <div>
      <Theme config={view}>
        <Wrapper>
          <Theme config={{ register: {} }}>
            <Avatar viewClass="register" shape={'square'} name={'l'} />
            <Avatar viewClass="register" shape={'square'} name={'lu'} />
            <Avatar viewClass="register" shape={'square'} name={'lug'} />
            <Avatar viewClass="register" shape={'square'} name={'lugia'} />
            <br />
            <Avatar shape={'circle'} name={'l'} />
            <Avatar shape={'circle'} name={'lu'} />
            <Avatar shape={'circle'} name={'lug'} />
            <Avatar shape={'circle'} name={'lugia'} />
          </Theme>
        </Wrapper>
        <Wrapper>
          <Theme config={{ register: { color: 'white', backgroundColor: '#4d63ff' } }}>
            <Avatar
              viewClass="register"
              shape={'square'}
              icon={'lugia-icon-financial_user'}
              size={'small'}
            />
            <Avatar
              viewClass="register"
              shape={'square'}
              icon={'lugia-icon-financial_user'}
              size={'default'}
            />
            <Avatar
              viewClass="register"
              shape={'square'}
              icon={'lugia-icon-financial_user'}
              size={'large'}
            />
          </Theme>
          <br />
          <Avatar shape={'circle'} icon={'lugia-icon-financial_user'} size={'small'} />
          <Avatar shape={'circle'} icon={'lugia-icon-financial_user'} size={'default'} />
          <Avatar shape={'circle'} icon={'lugia-icon-financial_user'} size={'large'} />
        </Wrapper>
        <Wrapper>
          <Theme config={{ register: { color: 'white', backgroundColor: '#4d63ff' } }}>
            <Avatar viewClass="register" shape={'square'} size={'small'} name={'lugia'} />
            <Avatar viewClass="register" shape={'square'} size={'default'} name={'lugia'} />
            <Avatar viewClass="register" shape={'square'} size={'large'} name={'lugia'} />
          </Theme>
          <br />
          <Avatar shape={'circle'} size={'small'} name={'lugia'} />
          <Avatar shape={'circle'} size={'default'} name={'lugia'} />
          <Avatar shape={'circle'} size={'large'} name={'lugia'} />
        </Wrapper>
        <Wrapper>
          <Avatar shape={'square'} name={'lugia'} msgNum={1} />
          <Avatar shape={'square'} icon={'lugia-icon-financial_user'} msgNum={2} />
          <Avatar
            shape={'square'}
            src="http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg"
            msgNum={99}
          />
          <br />
          <Avatar shape={'circle'} name={'lugia'} />
          <Avatar shape={'circle'} icon={'lugia-icon-financial_user'} />
          <Avatar
            shape={'circle'}
            src="http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg"
            msgNum={99}
          />
        </Wrapper>
      </Theme>
      <Wrapper>
        <Badge count={10}>
          <Avatar shape={'square'} size={'large'} name={'lugia'} />
        </Badge>
        <br />
        <br />
        <Badge dot={true}>
          <Avatar shape={'square'} size={'large'} name={'lugia'} />
        </Badge>

        <Theme config={view}>
          <br />
          <br />
          <Theme config={{ register: { position: { right: 15, top: 8 } } }}>
            <Badge viewClass="register" count={10}>
              <Avatar icon={'lugia-icon-financial_user'} size={'large'} />
            </Badge>
            <br />
            <br />
            <Badge dot={true}>
              <Avatar icon={'lugia-icon-financial_user'} size={'large'} />
            </Badge>
          </Theme>
        </Theme>
      </Wrapper>
    </div>
  );
};
