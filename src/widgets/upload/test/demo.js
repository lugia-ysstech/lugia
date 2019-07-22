import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Disabled from './Disabled';
import Limit from './Limit';
import Multiple from './Multiple';
import AreaType from './AreaType';
import AutoUpload from './AutoUpload';
import FileList from './FileList';
import Event from './Event';
import ThemeUploadLiType from './ThemeUploadLiType';
import ThemeUploadListSuccessIcon from './ThemeUploadListSuccessIcon';
import ThemeUploadListFailedIcon from './ThemeUploadListFailedIcon';
import ThemeUploadButtonType from './ThemeUploadButtonType';
import ThemeUploadPictureType from './ThemeUploadPictureType';
import ThemeUploadAreaType from './ThemeUploadAreaType';
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
  color:blue;
  font-weight:bold;
`;
export default class testDemo extends React.Component<any, any> {
  render() {
    return (
      <div style={{height:'100vh'}}>
        <Contain>
          <H1>props</H1>
          <H2>disabled</H2>
          <Disabled/>
          <H2>limit</H2>
          <Limit/>
          <H2>Multiple</H2>
          <Multiple/>
          <H2>AreaType</H2>
          <AreaType/>
          <H2>AutoUpload</H2>
          <AutoUpload/>
          <H2>FileList</H2>
          <FileList/>
          <H2>OnProgress</H2>
          <Event/>
        </Contain>
        <Contain>
          <H1>theme</H1>
          <H2>UploadLiType</H2>
          <ThemeUploadLiType/>
          <H2>UploadListSuccessIcon</H2>
          <ThemeUploadListSuccessIcon/>
          <H2>UploadListFailedIcon</H2>
          <ThemeUploadListFailedIcon/>
          <H2>UploadButtonType</H2>
          <ThemeUploadButtonType/>
          <H2>UploadPictureType</H2>
          <ThemeUploadPictureType/>
          <H2>AreaTypeUpload</H2>
          <ThemeUploadAreaType/>
        </Contain>
      </div>
    );
  }
}
