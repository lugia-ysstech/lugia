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
export default class ThemeUploadPictureType extends React.Component<any, any> {
  render(){
    const defaultProps = {
      areaType: 'picture',
    };
    /*
    *
    "normal": [["width"], ["height"], ["opacity"], ["border"]],
          "hover": [["background"], ["opacity"], ["border"]],
          "clicked": [],
          "disabled": [["background"], ["color"], ["border"]]
    * */
    const configNormal={
      [Widget.Upload]:{
        UploadPictureType:{
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
        UploadPictureType:{
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
            fontSize:30,
            opacity:0.5
          },

        }
      }

    };
    const configDisabled={[Widget.Upload]:{
        UploadPictureType:{
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
            fontSize:30,
            opacity:0.5
          },
        }
      }};
    const ConfigAll={[Widget.Upload]:{
        UploadPictureType:{
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
          },
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
            opacity:0.5,
            width:500,
            height:600,
            fontSize:30
          },
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
        <Box>
          <Theme config={ConfigAll}>
            <Text>normal+hover+disabled</Text>
            <Upload {...defaultProps}/>
          </Theme>
        </Box>
      </div>
    )
  }
}
