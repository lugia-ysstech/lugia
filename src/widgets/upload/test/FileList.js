
import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
export default class FileList extends React.Component<any, any> {
  render(){
    const defaultProps = {
      areaType: 'both',
      url: '/upload',
      showFileList: true,
      autoUpload:false,
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
    return (
      <Upload {...defaultProps}/>
    )
  }
}

