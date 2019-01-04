import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
// import request from './request';

const Title = styled.div`
  font-size: 16px;
  padding: 10px 0 0 10px;
  border-top: 1px solid #ccc;
`;

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }

  render() {
    const defaultProps7 = {
      listType: 'default',
      inputId: 'upload',
      showFileList: true,
      disabled: true,
    };
    const defaultProps9 = {
      listType: 'area',
      inputId: 'upload6',
      showFileList: true,
      disabled: true,
      
    };
    const defaultProps8 = {
      listType: 'button',
      inputId: 'upload1',
      disabled: true,
      showFileList: true,
    };
    return (
      <div>
        <Upload {...defaultProps7} />
        <Upload {...defaultProps8} />
        <Upload {...defaultProps9} />
      </div>
    );
  }

}

export default UploadDemo;
