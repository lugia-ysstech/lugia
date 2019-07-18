import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Base from './Base';
import Count from './Count';
import AllowHalf from './AllowHalf';
import Classify from './Classify';
import IconClass from './IconClass';
import Value from './Value';
import Disabled from './Disabled';
import ThemeActiveIcon from './ThemeActiveIcon';
import ThemeDefaultRateIcon from './ThemeDefaultRateIcon';
import ActiveIconAndDefaultRateIcon from './ActiveIconAndDefaultRateIcon';
import ThemeDangerIcon from './ThemeDangerIcon';
import ThemeAmazedIcon from './ThemeAmazedIcon';
import ThemeActiveTextIcon from './ThemeActiveTextIcon';
import ThemeDefaultTextIcon from './ThemeDefaultTextIcon';
const Contain =styled.div`
  float:left;
  width:50%;
`;
const H1 = styled.h1`
  line-height:50px;
  font-size:16px;
`;
const H2 = styled.p`
  line-height:50px;
  font-size:14px;
`;
export default class testDemo extends React.Component<any, any> {
  render() {
    return (
      <div style={{height:'100vh'}}>
      <Contain>
        <H1>props</H1>
        <H2>Base</H2>
        <Base/>
        <H2>Count</H2>
        <Count/>
        <H2>AllowHalf</H2>
        <AllowHalf/>
        <H2>Classify</H2>
        <Classify/>
        <H2>IconClass</H2>
        <IconClass/>
        <H2>Value</H2>
        <Value/>
        <H2>Disabled</H2>
        <Disabled/>
      </Contain>
        <Contain>
          <H1>theme</H1>
          <H2>ThemeActiveIcon</H2>
          <ThemeActiveIcon/>
          <H2>ThemeDefaultRateIcon</H2>
          <ThemeDefaultRateIcon/>
          <H2>ActiveIconAndDefaultRateIcon</H2>
          <ActiveIconAndDefaultRateIcon/>
          <H2>ThemeDangerIcon</H2>
          <ThemeDangerIcon/>
          <H2>ThemeAmazedIcon</H2>
          <ThemeAmazedIcon/>
          <H2>ThemeActiveTextIcon</H2>
          <ThemeActiveTextIcon/>
          <H2>ThemeDefaultTextIcon</H2>
          <ThemeDefaultTextIcon/>
        </Contain>
      </div>
    );
  }
}
