import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
const {Tabpane}=Tabs;
const Contain =styled.div`
  float:left;
  width:50%;
`;
const H1 = styled.h1`
  line-height:50px;
  font-size:16px;
`;
const H2 = styled.p`
  line-height:50px;
  font-size:14px;
`;
/*
"normal": [["background"], ["padding"], ["border"], ["borderRadius"], ["opacity"]],
          "hover": [],
          "clicked": [],
          "disabled": []
* */
export default class ThemeWindowContainer extends React.Component<any, any> {
  render(){
    const props={
      tabType:'window'
    };
    const configNormal={
      [Widget.Tabs]:{
        WindowContainer:{
          normal:{
            width:600,
            height:400,
            color:'red',
            background:{color:'green'},
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
            borderRadius:{
              topLeft: 3,
              topRight: 10,
              bottomRight: 15,
              bottomLeft: 20
            },
            margin:{
              top:10,
              right:10,
              bottom:10,
              left:10,
            },
            padding:{
              top:10,
              right:10,
              bottom:10,
              left:10,
            },
            font:{
              size:30,
              weight:600
            },
            opacity:0.5
          }
        }
      }
    };
    const configHover={
      [Widget.Tabs]:{
        WindowContainer:{
            hover:{
              color:'green',
              background:'red',
              border:{
                top:{
                  width:2,
                  style:'solid',
                  color:'red'
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
              font:{
                size:30,
                weight:600
              },
              opacity:0.5
            },
          }
        }
    };
    const configDisabled={
      [Widget.Tabs]:{
          WindowContainer:{
            disabled:{
              color:'blue'
            }
          }
        }
    };
    return (
      <div>
        <H2>normal</H2>
        <Theme config={configNormal}>
          <Tabs {...props}/>
        </Theme>
        <H2>hover</H2>
        <Theme config={configHover}>
          <Tabs {...props}/>
        </Theme>
        <H2>disabled</H2>
        <Theme config={configDisabled}>
          <Tabs {...props}/>
        </Theme>
      </div>
    )
  }
}
