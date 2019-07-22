import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import styled from "styled-components";

const Title = styled.div`
    margin: 10px 0;
`;


class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const defaultProps1 = {
      areaType: 'default',
      inputId: 'upload',
      url: '/upload',
    };
    const defaultProps2 = {
      areaType: 'both',
      inputId: 'upload',
      url: '/upload',
    };
    const defaultProps3 = {
      areaType: 'button',
      inputId: 'upload',
      url: '/upload',
    };
    const defaultProps4 = {
      areaType: 'picture',
      inputId: 'upload4',
      url: '/upload',
    };
    const defaultProps5 = {
      areaType: 'area',
      inputId: 'upload6',
      url: '/upload',
    };

    return (
      <div>
        <Title>默认上传</Title>
        <Upload {...defaultProps1} />
        <Title>带按钮的默认上传</Title>
        <Upload {...defaultProps2} />
        <Title>按钮上传</Title>
        <Upload {...defaultProps3} />
        <Title>图片上传</Title>
        <Upload {...defaultProps4} />
        <Title>区域上传</Title>
        <Upload {...defaultProps5} />

      </div>
    );
  }
}

export default UploadDemo;
