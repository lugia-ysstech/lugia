/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Avatar, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
export default class TypeAvatar extends React.Component<any, any> {

  render () {
    const view = {
      [ Widget.Avatar ]: {
        color: 'white',
        backgroundColor: '#cccccc',
        margin: 10
      },
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Avatar shape={'circle'} src={'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg'}/>
          <Avatar shape={'circle'} name={'lugia'}/>
          <Avatar shape={'circle'} icon={'lugia-icon-financial_user'}/>
          <br/>
          <Avatar shape={'square'} src={'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg'}/>
          <Avatar shape={'square'} name={'lugia'}/>
          <Avatar shape={'square'} icon={'lugia-icon-financial_user'}/>
        </Wrapper>
      </Theme>);
  }
}
