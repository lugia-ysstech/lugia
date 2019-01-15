import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const defaultProps4 = {
      listType: 'picture',
      inputId: 'upload4',
      url: '/upload',
    };
    const defaultProps9 = {
      listType: 'area',
      inputId: 'upload6',
      url: '/upload',
    };
    const defaultProps7 = {
      listType: 'default',
      inputId: 'upload',
      url: '/upload',
    };
    return (
      <div>
        <Upload {...defaultProps7} />
        <Upload {...defaultProps4} />
        <Upload {...defaultProps9} />
      </div>
    );
  }
}

export default UploadDemo;
