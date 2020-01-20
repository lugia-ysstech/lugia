import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import styled from "styled-components";

const Title = styled.div`
    margin: 10px 0;
`;

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }

  render() {
    const defaultProps = {
      areaType: 'default',
      inputId: 'upload',
      showFileList: true,
      disabled: true,
      url: '/upload',
    };
    const bothProps = {
      areaType: 'both',
      inputId: 'upload',
      showFileList: true,
      disabled: true,
      url: '/upload',
    };
    const buttonProps = {
      areaType: 'button',
      inputId: 'upload2',
      showFileList: true,
      disabled: true,
      url: '/upload',

    };
    const areaProps = {
      areaType: 'area',
      inputId: 'upload3',
      disabled: true,
      showFileList: true,
      url: '/upload',
    };
    const pictureProps = {
      areaType: 'picture',
      inputId: 'upload4',
      disabled: true,
      showFileList: true,
      url: '/upload',
    };
    return (
      <div>
        <Title>areaType: default</Title>
        <Upload {...defaultProps} />
        <Title>areaType: both</Title>
        <Upload {...bothProps} />
        <Title>areaType: button</Title>
        <Upload {...buttonProps} />
        <Title>areaType: area</Title>
        <Upload {...areaProps} />
        <Title>areaType: picture</Title>
        <Upload {...pictureProps} />
      </div>
    );
  }

}

export default UploadDemo;
