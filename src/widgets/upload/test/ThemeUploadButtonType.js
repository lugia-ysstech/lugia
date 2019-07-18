import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
import styled from 'styled-components';
const Text=styled.span`
  display:inline-block;
  padding:10px;
`;
const Box=styled.div`
  margin-bottom:10px;
`;
export default class ThemeUploadButtonType extends React.Component<any, any> {
  render(){
    const defaultProps = {
      areaType: 'button',
      url: '/upload',
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
    /*
    *
    *  "normal": [["background"], ["width"], ["height"], ["boxShadow"], ["border"], ["opacity"]],
          "hover": [["background"], ["boxShadow"], ["border"], ["opacity"]],
          "clicked": [],
          "disabled": [["background"], ["border"]]
    * */
    const configNormal={
      [Widget.Upload]:{
        UploadButtonType:{
          normal:{
            width:400,
            height:100,
            background:{
              color:'red'
            },
            border:{
              top:{
                width:1,
                style:'solid',
                color:'green'
              },
              right:{
                width:1,
                style:'solid',
                color:'green'
              },
              bottom:{
                width:1,
                style:'solid',
                color:'green'
              },
              left:{
                width:1,
                style:'solid',
                color:'green'
              }
            },
            boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
            color:'yellow',
            opacity:0.5
          }
        }
      }
    };
    const configHover={
      [Widget.Upload]:{
        UploadButtonType:{
          hover:{
            background:{
              color:'red'
            },
            border:{
              top:{
                width:1,
                style:'solid',
                color:'blue'
              },
              right:{
                width:1,
                style:'solid',
                color:'blue'
              },
              bottom:{
                width:1,
                style:'solid',
                color:'blue'
              },
              left:{
                width:1,
                style:'solid',
                color:'green'
              }
            },
            color:'blue'
          },
          width:500,
          height:600,
          fontSize:30
        }
      }

    };
    const configDisabled={[Widget.Upload]:{
        UploadButtonType:{
          disabled:{
            background:{
              color:'red'
            },
            color:'blue',
            width:500,
            height:100,
            fontSize:30
          },
        }
      }};
    return (
      <div>
        <Box>
          <Theme config={configNormal}>
            <Text>normal:width,height,background,border,boxShadow,opacity</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
        {/*<Box>*/}
          {/*<Theme config={configHover}>*/}
            {/*<Text>hover:background,border,color:<i style={{color:'blue'}}>blue</i></Text>*/}
            {/*<Upload {...defaultProps}/>*/}
          {/*</Theme>*/}
        {/*</Box>*/}
        {/*<Box>*/}
          {/*<Theme config={configDisabled}>*/}
            {/*<Text>disabled:background,color</Text>*/}
            {/*<Upload {...defaultProps} disabled/>*/}
          {/*</Theme>*/}
        {/*</Box>*/}
      </div>
    )
  }
}
