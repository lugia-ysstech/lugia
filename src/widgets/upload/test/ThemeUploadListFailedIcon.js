import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
const Text=styled.p`
  padding:10px;
`;
const Box=styled.div`
  margin-bottom:10px;
`;
export default class ThemeUploadListFailedIcon extends React.Component<any, any> {
  render(){
    const defaultProps = {
      areaType: 'both',
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
    * "normal": [["color"]],
          "hover": [],
          "clicked": [],
          "disabled": []
    * */
    const configNormal={
      [Widget.Upload]:{
        UploadListFailedIcon:{
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
            color:'yellow',
            fontSize:30
          }
        }
      }
    };
    const configHover={
      [Widget.Upload]:{
        UploadListFailedIcon:{
          hover:{
            background:{
              color:'red'
            },
            margin:{
              top:10,
              right:10,
              bottom:10,
              left:10,
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
        UploadListFailedIcon:{
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
            <Text>normal:color</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configHover}>
            <Text>hover[]</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configDisabled}>
            <Text>disabled[]</Text>
            <Upload {...defaultProps} disabled/>
          </Theme>
        </Box>
      </div>
    )
  }
}
