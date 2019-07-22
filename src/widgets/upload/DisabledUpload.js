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
    const defaultProps1 = {
      areaType: 'default',
      inputId: 'upload',
      showFileList: true,
      disabled: true,
      url: '/upload',
    };
    const defaultProps2 = {
      areaType: 'both',
      inputId: 'upload',
      showFileList: true,
      disabled: true,
      url: '/upload',
    };
    const defaultProps3 = {
      areaType: 'button',
      inputId: 'upload2',
      showFileList: true,
      disabled: true,
      url: '/upload',

    };
    const defaultProps4 = {
      areaType: 'area',
      inputId: 'upload3',
      disabled: true,
      showFileList: true,
      url: '/upload',
    };
    const defaultProps5 = {
      areaType: 'picture',
      inputId: 'upload4',
      disabled: true,
      showFileList: true,
      url: '/upload',
    };
    return (
      <div>
        <Title>areaType: default</Title>
        <Upload {...defaultProps1} />
        <Title>areaType: both</Title>
        <Upload {...defaultProps2} />
        <Title>areaType: button</Title>
        <Upload {...defaultProps3} />
        <Title>areaType: area</Title>
        <Upload {...defaultProps4} />
        <Title>areaType: picture</Title>
        <Upload {...defaultProps5} />
      </div>
    );
  }

}

export default UploadDemo;
