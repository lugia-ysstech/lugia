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
    const smallPictureProps = {
      areaType: 'picture',
      inputId: 'upload1',
      size: 'small',
      url: '/upload',
    };
    const defaultPictureProps = {
      areaType: 'picture',
      inputId: 'upload2',
      url: '/upload',
    };
    const largePictureProps = {
      areaType: 'picture',
      inputId: 'upload3',
      size: 'large',
      url: '/upload',
    };

    return (
      <div>
        <Title>size：small</Title>
        <Upload {...smallPictureProps} />
        <Title>size：default</Title>
        <Upload {...defaultPictureProps} />
        <Title>size：large</Title>
        <Upload {...largePictureProps} />
      </div>
    );
  }
}

export default UploadDemo;
