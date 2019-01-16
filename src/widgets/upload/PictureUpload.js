import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const defaultProps3 = {
      listType: 'picture',
      inputId: 'upload3',
      size: 'large',
      multiple: true,
      accept: 'image/*',
      url: '/upload',
    };
    const defaultProps4 = {
      listType: 'picture',
      inputId: 'upload4',
      url: '/upload',
    };
    const defaultProps5 = {
      listType: 'picture',
      inputId: 'upload5',
      size: 'small',
      url: '/upload',
    };
    return (
      <div>
        <Upload {...defaultProps5} />
        <Upload {...defaultProps4} />
        <Upload {...defaultProps3} />
      </div>
    );
  }
}

export default UploadDemo;
