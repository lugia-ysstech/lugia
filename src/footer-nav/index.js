/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {Theme ,Icon } from '@lugia/lugia-web';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
import { go} from '@lugia/lugiax-router';
const { themeColor } = colorsFunc();

const Wrapper = styled.div`
  text-align: right;
  margin:50px 0;
  position:relative;
`;

const Container = styled.span`
  cursor:pointer;
`;

const Text = styled.span`
  color: ${themeColor};
  font-size: 12px;
  margin: 0 7px;
  
  
`;

const NavIcon = styled(Icon)`
  color: ${themeColor};
  vertical-align: text-top !important;
`;

export default class FooterNav extends React.Component<any,any> {

  render() {
    const {prev:{text:prevText,url:prevUrl},next:{text:nextText,url:nextUrl}} = this.props;
    return (
      <Wrapper>
        {prevText && <Container onClick={e => this.clickToGo(prevUrl)}>
          <NavIcon iconClass="lugia-icon-direction_Left" />
          <Text>{prevText}</Text>
        </Container>}
        {prevText && nextText && <Text>|</Text>}
        {nextText && <Container onClick={e => this.clickToGo(nextUrl)}>
          <Text>{nextText}</Text>
          <NavIcon iconClass="lugia-icon-direction_right" />
        </Container>}


      </Wrapper>
    );
  }
  clickToGo = (url:string) => {
    url && go({ url });
  }

}
