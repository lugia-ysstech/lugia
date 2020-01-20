import React from 'react';
import { Upload,  Button } from '@lugia/lugia-web';
import styled from "styled-components";

const Title = styled.div`
    margin: 10px 0;
`;

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const bothProps = {
      areaType: 'both',
      inputId: 'bothUpload',
      url: '/upload',
    };
    const buttonProps = {
      areaType: 'button',
      inputId: 'buttonUpload',
      url: '/upload',
    };
    const pictureProps = {
      areaType: 'picture',
      inputId: 'pictureUpload',
      url: '/upload',
    };
    const areaProps = {
      areaType: 'area',
      inputId: 'areaUpload',
      url: '/upload',
    };
    const customProps = {
      areaType: 'custom',
      inputId: 'customUpload',
      url: '/upload'
    };

    return (
      <div>
        <Title>带按钮的默认上传</Title>
        <Upload {...bothProps} />
        <Title>按钮上传</Title>
        <Upload {...buttonProps} />
        <Title>图片上传</Title>
        <Upload {...pictureProps} />
        <Title>区域上传</Title>
        <Upload {...areaProps} />
        <Title>自定义上传</Title>
        <Upload {...customProps} userDefine={ <Button circle icon="lugia-icon-financial_download" />  } />

      </div>
    );
  }
}

export default UploadDemo;
