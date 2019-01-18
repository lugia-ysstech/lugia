import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import UPLOAD from '@lugia/lugia-web/dist/upload/lugia.upload.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseUpload =  require('./BaseUpload').default;  const FileListUpload =  require('./FileListUpload').default;  const CustomUpload =  require('./CustomUpload').default;  const PictureUpload =  require('./PictureUpload').default;  const DisabledUpload =  require('./DisabledUpload').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'上传'} subTitle={'Upload'} desc={'上传组件,可通过文件选择和拖拽上传'} />
                              <Demo title={'按钮'} titleID={'upload-0'} code={<code>{ 'import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps = {\n      listType: \'button\',\n      inputId: \'upload1\',\n      url: \'/upload\',\n      multiple: true,\n      showFileList: true,\n      fileList: [\n        {\n          id: 1,\n          name: \'文件11111.jpg\',\n          status: \'done\',\n          url: \'http://img05.tooopen.com/images/20150602/tooopen_sy_128223296629.jpg\',\n        },\n        { id: 2, name: \'文件666.doc\', status: \'fail\' },\n        {\n          id: 3,\n          name: \'文件11111.jpg\',\n          status: \'done\',\n          url: \'http://img05.tooopen.com/images/20150602/tooopen_sy_128223296629.jpg\',\n        },\n      ],\n    };\n\n    return (\n      <div>\n        <Upload {...defaultProps} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n'}</code>} desc={'点击按钮上传'}  demo={<BaseUpload />}></Demo><Demo title={'文件列表'} titleID={'upload-1'} code={<code>{ 'import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps8 = {\n      listType: \'button\',\n      inputId: \'upload1\',\n      showFileList: true,\n      url: \'/upload\',\n      fileList: [\n        { id: 1, name: \'文件11111.jpg\', status: \'done\' },\n        { id: 2, name: \'文件666.doc\', status: \'fail\' }\n      ]\n    };\n    return (\n      <div>\n        <Upload {...defaultProps8} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n'}</code>} desc={'显示文件列表'}  demo={<FileListUpload />}></Demo><Demo title={'多种风格'} titleID={'upload-2'} code={<code>{ 'import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps4 = {\n      listType: \'picture\',\n      inputId: \'upload4\',\n      url: \'/upload\',\n    };\n    const defaultProps9 = {\n      listType: \'area\',\n      inputId: \'upload6\',\n      url: \'/upload\',\n    };\n    const defaultProps7 = {\n      listType: \'default\',\n      inputId: \'upload\',\n      url: \'/upload\',\n    };\n    return (\n      <div>\n        <Upload {...defaultProps7} />\n        <Upload {...defaultProps4} />\n        <Upload {...defaultProps9} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n'}</code>} desc={'多种风格上传,按钮,区域,图片等'}  demo={<CustomUpload />}></Demo><Demo title={'图片'} titleID={'upload-3'} code={<code>{ 'import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps3 = {\n      listType: \'picture\',\n      inputId: \'upload3\',\n      size: \'large\',\n      multiple: true,\n      accept: \'image/*\',\n      url: \'/upload\',\n    };\n    const defaultProps4 = {\n      listType: \'picture\',\n      inputId: \'upload4\',\n      url: \'/upload\',\n    };\n    const defaultProps5 = {\n      listType: \'picture\',\n      inputId: \'upload5\',\n      size: \'small\',\n      url: \'/upload\',\n    };\n    return (\n      <div>\n        <Upload {...defaultProps5} />\n        <Upload {...defaultProps4} />\n        <Upload {...defaultProps3} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n'}</code>} desc={'多种图片尺寸上传'}  demo={<PictureUpload />}></Demo><Demo title={'禁用'} titleID={'upload-4'} code={<code>{ 'import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    const defaultProps7 = {\n      listType: \'default\',\n      inputId: \'upload\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n    };\n    const defaultProps9 = {\n      listType: \'area\',\n      inputId: \'upload6\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n\n    };\n    const defaultProps8 = {\n      listType: \'button\',\n      inputId: \'upload1\',\n      disabled: true,\n      showFileList: true,\n      url: \'/upload\',\n    };\n    return (\n      <div>\n        <Upload {...defaultProps7} />\n        <Upload {...defaultProps8} />\n        <Upload {...defaultProps9} />\n      </div>\n    );\n  }\n\n}\n\nexport default UploadDemo;\n'}</code>} desc={'禁用上传功能'}  demo={<DisabledUpload />}></Demo>
                              <EditTables dataSource={UPLOAD} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'按钮'} href={'#upload-0'} /><Link title={'文件列表'} href={'#upload-1'} /><Link title={'多种风格'} href={'#upload-2'} /><Link title={'图片'} href={'#upload-3'} /><Link title={'禁用'} href={'#upload-4'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         });   
        
