import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const defaultProps = {
      inputId: 'upload1',
      url: '/upload',
      multiple: true,
    };

    return (
      <div>
        <Upload {...defaultProps} />
      </div>
    );
  }
}

export default UploadDemo;
