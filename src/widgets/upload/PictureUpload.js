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
      areaType: 'picture',
      inputId: 'upload1',
      size: 'small',
      url: '/upload',
    };
    const defaultProps2 = {
      areaType: 'picture',
      inputId: 'upload2',
      url: '/upload',
    };
    const defaultProps3 = {
      areaType: 'picture',
      inputId: 'upload3',
      size: 'large',
      multiple: true,
      accept: 'image/*',
      url: '/upload',
    };

    return (
      <div>
        <Title>size：small</Title>
        <Upload {...defaultProps1} />
        <Title>size：default</Title>
        <Upload {...defaultProps2} />
        <Title>size：large</Title>
        <Upload {...defaultProps3} />
      </div>
    );
  }
}

export default UploadDemo;
