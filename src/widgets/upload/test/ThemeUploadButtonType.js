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
    };
    const defaultPropsBoth = {
      areaType: 'both',
    };
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
            color:'blue',
            width:500,
            height:600,
            fontSize:30
          },

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
        <p> button</p>
        <Box>
          <Theme config={configNormal}>
            <Text>normal:width,height,background,border,boxShadow,opacity</Text>
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
        <p> both</p>
        <Box>
          <Theme config={configNormal}>
            <Text>normal:width,height,background,border,boxShadow,opacity</Text>
            <Upload {...defaultPropsBoth}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configHover}>
            <Text>hover</Text>
            <Upload {...defaultPropsBoth}/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configDisabled}>
            <Text>disabled</Text>
            <Upload {...defaultPropsBoth} disabled/>
          </Theme>
        </Box>
      </div>
    )
  }
}
