import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const buttonProps = {
      areaType: 'button',
      inputId: 'upload1',
      showFileList: true,
      url: '/upload',
      fileList: [
        { id: 1, name: '文件11111.jpg', status: 'done' },
        { id: 2, name: '文件666.doc', status: 'fail' }
      ]
    };
    return (
      <div>
        <Upload {...buttonProps} />
      </div>
    );
  }
}

export default UploadDemo;
