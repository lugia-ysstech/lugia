import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import TabPosition from './TabPosition';
import Disabled from './Disabled';
import TabType from './TabType';
import Data from './Data';
import ShowDeleteBtn from './ShowDeleteBtn';
import IsSelect from './IsSelect';
import TalPanel from './TalPanel';
import ShowAddBtn from './ShowAddBtn';
import ForceRender from './ForceRender';
import TabPanelEvent from './TabPanelEvent';
import TabsEvent from './TabsEvent';
import ThemeTabpanelDefaultTabPan from './ThemeTabpanelDefaultTabPan';
import ThemeSelectTabPan from './ThemeSelectTabPan';
import ThemeCardAddButton from './ThemeCardAddButton';
import ThemeWindowContainer from './ThemeWindowContainer';
import ThemeContentBlock from './ThemeContentBlock';
import ThemeTitleContainer from './ThemeTitleContainer';
import ThemeBorderStyle from './ThemeBorderStyle';
import ThemeTabsDefaultTabPan from './ThemeTabsDefaultTabPan';
const Contain =styled.div`
  float:left;
  width:50%;
`;
const H1 = styled.h1`
  line-height:50px;
`;
const H2 = styled.p`
  line-height:50px;
  font-size:14px;
  color:blue;
  font-weight:bold;
`;
export default class testDemo extends React.Component<any, any> {
  render(){
    return (
      <div>
        <Contain>
          <H1>props</H1>
          <H2>tabPosition</H2>
          <TabPosition/>
          {/*<H2>disabled</H2>*/}
          {/*<Disabled/>*/}
          <H2>data</H2>
          <Data/>
          <H2>tabType</H2>
          <TabType/>
          <H2>showDeleteBtn</H2>
          <ShowDeleteBtn/>
          <H2>isSelect</H2>
          <IsSelect/>
          <H2>TalPanel</H2>
          <TalPanel/>
          {/*<H2>showAddBtn</H2>*/}
          {/*<ShowAddBtn/>*/}
          <H2>forceRender</H2>
          <ForceRender/>
          <H2>TabPanelEvent</H2>
          <TabPanelEvent/>
          <H2>TabsEvent</H2>
          <TabsEvent/>
        </Contain>
        <Contain>
          <H1>theme</H1>
          <H2>tabpanel-DefaultTabPan</H2>
          <ThemeTabpanelDefaultTabPan/>
          <H2>tabs-DefaultTabPan</H2>
          <ThemeTabsDefaultTabPan/>
          <H2>ThemeSelectTabPan</H2>
          <ThemeSelectTabPan/>
          <H2>ThemeCardAddButton</H2>
          <ThemeCardAddButton/>
          <H2>ThemeWindowContainer</H2>
          <ThemeWindowContainer/>
          <H2>ThemeContentBlock</H2>
          <ThemeContentBlock/>
          <H2>ThemeTitleContainer</H2>
          <ThemeTitleContainer/>
          <H2>ThemeBorderStyle</H2>
          <ThemeBorderStyle/>
        </Contain>
      </div>
    )
  }
}
