import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const defaultProps = {
      listType: 'default',
      inputId: 'upload',
      showFileList: true,
      
      multiple: true,
      accessKey: ['uploadToken'],
      data: {},
      onChange: res => {
      },
      onSuccess: (res, fileList) => {
      },
      onComplete: res => {
      },
      onProgress: res => {
      },
      onFail: res => {
      },
    };
    const defaultProps1 = {
      listType: 'button',
      inputId: 'upload1',

      multiple: true,
      showFileList: true,
      fileList: [
        {
          id: 1,
          name: '文件11111.jpg',
          status: 'done',
          url: 'http://img05.tooopen.com/images/20150602/tooopen_sy_128223296629.jpg',
        },
        { id: 2, name: '文件666.doc', status: 'fail' },
        {
          id: 3,
          name: '文件11111.jpg',
          status: 'done',
          url: 'http://img05.tooopen.com/images/20150602/tooopen_sy_128223296629.jpg',
        },
      ],
    };
    const defaultProps2 = {
      listType: 'both',
      inputId: 'upload2',

      showFileList: true,
      multiple: true,
      onChange: res => {
        console.log('cbk', res);
      },
    };
    return (
      <div>
        <Upload {...defaultProps1} />
      </div>
    );
  }
}

export default UploadDemo;
