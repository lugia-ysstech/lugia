import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
import styled from 'styled-components';
const Text=styled.p`
  padding:10px;
`;
const Box=styled.div`
  margin-bottom:10px;
`;
export default class ThemeUploadAreaType extends React.Component<any, any> {
  render(){
    const defaultProps = {
      areaType: 'area',
    };
    /*
    *
    *"normal": [["width"], ["height"], ["fontSize"],["color"]],
          "hover": [],
          "clicked": [],
          "disabled": [["color"]]
    * */
    const configNormal={
      [Widget.Upload]:{
        UploadAreaType:{
          normal:{
            background:{
              color:'green'
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
            boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
            width:400,
            height:300,
            color:'yellow',
            fontSize:30,
          }
        }
      }
    };
    const configHover={
      [Widget.Upload]:{
        UploadAreaType:{
          hover:{
            background:{
              color:'green'
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
            boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
            color:'blue'
          },
          width:500,
          height:600,
          fontSize:30
        }
      }

    };
    const configDisabled={[Widget.Upload]:{
        UploadAreaType:{
          disabled:{
            background:{
              color:'red'
            },
            color:'blue',
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
            boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
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
            <Text>normal</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configHover}>
            <Text>hover</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configDisabled}>
            <Text>disabled</Text>
            <Upload {...defaultProps} disabled/>
          </Theme>
        </Box>
      </div>
    )
  }
}
