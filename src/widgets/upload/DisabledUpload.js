import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';

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
      url: '/upload',
    };
    const defaultProps9 = {
      listType: 'area',
      inputId: 'upload6',
      showFileList: true,
      disabled: true,
      url: '/upload',

    };
    const defaultProps8 = {
      listType: 'button',
      inputId: 'upload1',
      disabled: true,
      showFileList: true,
      url: '/upload',
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
